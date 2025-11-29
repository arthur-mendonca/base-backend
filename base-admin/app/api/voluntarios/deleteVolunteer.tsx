import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function deleteVolunteer(volunteerId: string) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.delete(`/voluntario/${volunteerId}`);

  if (!(response.status === 200 || response.status === 204)) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Erro ao remover voluntário.");
  }

  return { success: true };
}
