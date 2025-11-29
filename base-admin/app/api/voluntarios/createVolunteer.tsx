import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";
import type { CreateVolunteerPayload } from "~/interfaces/volunteers";

export async function createVolunteer(payload: CreateVolunteerPayload) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.post(`/voluntario`, payload);

  if (response.status !== 201) {
    const errorData = response.data || {};
    throw new Error(
      errorData.message || "Ocorreu um erro ao criar o voluntário."
    );
  }

  return response.data;
}
