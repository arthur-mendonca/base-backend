import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";
import type { Doacao } from "~/interfaces/doacao";

export async function createDoacao(payload: Omit<Doacao, 'id_doacao'>) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.post(`/doacao`, payload);

  if (response.status !== 201) {
    const errorData = response.data || {};
    throw new Error(
      errorData.message || "Ocorreu um erro ao criar a doação."
    );
  }

  return response.data;
}
