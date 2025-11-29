import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function deleteDoacao(doacaoId: string) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.delete(`/doacao/${doacaoId}`);

  if (!(response.status === 200 || response.status === 204)) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Erro ao remover doação.");
  }

  return { success: true };
}
