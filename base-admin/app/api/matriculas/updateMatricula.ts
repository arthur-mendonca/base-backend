import type { UpdateMatriculaPayload } from "~/interfaces/matricula";
import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function updateMatricula(
  id: string,
  body: UpdateMatriculaPayload
) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.patch(`/matricula-atividade/${id}`, body);

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao atualizar matrícula.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Erro ao atualizar matrícula.");
  }
}
