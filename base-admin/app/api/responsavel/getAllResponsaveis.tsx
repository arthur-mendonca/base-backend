import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function getAllResponsaveis() {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.get(`/responsavel`);

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao buscar responsáveis.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao buscar responsáveis."
    );
  }
}
