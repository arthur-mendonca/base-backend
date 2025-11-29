import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function deleteUser(userId: string | number) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.delete(`/usuario/${userId}`);

  if (!(response.status === 200 || response.status === 204)) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Erro ao remover usuário.");
  }

  return { success: true };
}
