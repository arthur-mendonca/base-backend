import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";
import type { UserUpdatePayload } from "~/interfaces/user";

export async function updateUser(
  userId: string | number,
  payload: UserUpdatePayload
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.put(`/usuario/${userId}`, payload);

  if (response.status !== 200) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Erro ao atualizar o perfil.");
  }

  return response.data;
}
