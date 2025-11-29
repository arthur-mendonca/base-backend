import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function getUserInfo() {
  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");

    if (!authToken || !userCookie) throw new Error("Não autenticado");

    const userFromCookie = JSON.parse(userCookie);
    const userId = userFromCookie.id;

    const response = await AxiosConnection.api.get(`/usuario/${userId}`);

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao buscar informações do usuário.");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao buscar informações do usuário."
    );
  }
}
