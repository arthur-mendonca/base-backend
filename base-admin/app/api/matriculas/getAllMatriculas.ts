import AxiosConnection from "..";
import { getCookie } from "~/utils/cookies";

export async function getAllMatriculas() {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.get(`/matricula-atividade`);
    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao buscar matrículas.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Erro ao buscar matrículas.");
  }
}
