import {} from "@react-router/node";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { AccountPage } from "~/pages/account/AccountPage";

interface User {
  id_usuario: number;
  nome: string;
  email: string;
  perfil: string;
  data_cadastro: string; // A API provavelmente retornará a data como string
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) {
    throw new Response("Não autenticado", { status: 401 });
  }

  const cookies = new URLSearchParams(cookieHeader.replace(/; /g, "&"));
  const authToken = cookies.get("authToken");
  const userCookie = cookies.get("user");

  if (!authToken || !userCookie) {
    throw new Response("Não autenticado", { status: 401 });
  }

  try {
    const userFromCookie = JSON.parse(userCookie);
    const userId = userFromCookie.id;

    const apiResponse = await fetch(`http://localhost:3001/usuario/${userId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!apiResponse.ok) {
      throw new Response("Falha ao buscar dados do usuário", {
        status: apiResponse.status,
      });
    }

    const userData: User = await apiResponse.json();
    return Response.json(userData);
  } catch (error) {
    console.error("Falha ao carregar dados do usuário:", error);
    throw new Response("Erro ao carregar dados do usuário", { status: 500 });
  }
}

export default function AccountRoute() {
  const user = useLoaderData<typeof loader>();
  return <AccountPage user={user} />;
}
