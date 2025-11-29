import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";
import type { Doacao } from "~/interfaces/doacao";

export async function updateDoacao(
  doacaoId: string | number,
  payload: Partial<Doacao>
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.patch(`/doacao/${doacaoId}`, payload);

  if (response.status !== 200) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Erro ao atualizar doação.");
  }

  return response.data;
}
