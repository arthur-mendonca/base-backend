import type { UpdateAtividadePayload } from "~/interfaces/atividade";
import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function updateAtividade(
  id: string,
  body: UpdateAtividadePayload
) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.patch(
      `/atividade/${id}`,
      body
    );

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao atualizar atividade.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao atualizar atividade."
    );
  }
}
