import { getCookie } from "~/utils/cookies";
import type { UserCreatePayload } from "~/interfaces/user";

export async function createUser(
  userId: string | number,
  payload: UserCreatePayload
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await fetch(`http://localhost:3001/usuario`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao criar usuário.");
  }

  return await response.json();
}
