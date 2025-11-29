import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function deleteResponsavel(id: string) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.delete(`/responsavel/${id}`);

    if (!(response.status === 200 || response.status === 204)) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao excluir responsável.");
    }

    return { success: true };
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao excluir responsável."
    );
  }
}
