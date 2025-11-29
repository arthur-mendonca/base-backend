import type { ProdutoCreatePayload } from "~/interfaces/produto";
import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function createProduto(body: ProdutoCreatePayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.post(`/produto`, body);

    if (response.status !== 201) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao criar produto.");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao criar produto."
    );
  }
}
