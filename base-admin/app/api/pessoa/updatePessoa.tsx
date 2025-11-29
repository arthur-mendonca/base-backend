import type { UpdatePessoaPayload } from "~/interfaces/pessoa";
import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function updatePessoa(id: string, body: UpdatePessoaPayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const sanitizedBody = Object.fromEntries(
      Object.entries(body).filter(([, value]) => value != null)
    ) as UpdatePessoaPayload;

    const response = await AxiosConnection.api.patch(`/pessoa/${id}`, sanitizedBody);

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao atualizar pessoa.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao atualizar pessoa."
    );
  }
}
