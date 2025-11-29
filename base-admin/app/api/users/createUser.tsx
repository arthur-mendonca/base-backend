import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";
import type { UserCreatePayload } from "~/interfaces/user";

export async function createUser(
  userId: string | number,
  payload: UserCreatePayload
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await AxiosConnection.api.post(`/usuario`, payload);

  if (response.status !== 201) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Erro ao criar usuário.");
  }

  return response.data;
}
