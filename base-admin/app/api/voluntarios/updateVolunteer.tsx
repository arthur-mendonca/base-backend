import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";
import type { Voluntario } from "~/interfaces/volunteers";

export async function updateVolunteer(
  volunteerId: string | number,
  payload: Partial<Voluntario>
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.put(`/voluntario/${volunteerId}`, payload);

  if (response.status !== 200) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Erro ao atualizar voluntário.");
  }

  return response.data;
}
