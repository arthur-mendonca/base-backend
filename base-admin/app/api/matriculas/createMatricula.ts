import type { CreateMatriculaPayload } from "~/interfaces/matricula";
import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function createMatricula(body: CreateMatriculaPayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.post(`/matricula-atividade`, body);
    if (response.status !== 201) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao criar matrícula.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Erro ao criar matrícula.");
  }
}
