import { getCookie } from "~/utils/cookies";
import type { ProdutoUpdatePayload } from "~/interfaces/produto";
import AxiosConnection from "..";

export async function updateProduto(id: string, body: ProdutoUpdatePayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.put(`/produto/${id}`, body);

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao atualizar produto.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao atualizar produto."
    );
  }
}
