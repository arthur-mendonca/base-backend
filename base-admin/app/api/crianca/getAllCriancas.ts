import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function getAllCriancas() {
  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");
    if (!authToken || !userCookie) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.get(`/crianca`);

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao buscar crianças.");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao buscar crianças."
    );
  }
}
