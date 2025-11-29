import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function deleteFamilia(id: string) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.delete(`/familia/${id}`);

    if (!(response.status === 200 || response.status === 204)) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao excluir família.");
    }

    return { success: true };
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao excluir família."
    );
  }
}
