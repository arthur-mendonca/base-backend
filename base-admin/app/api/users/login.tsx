import type { LoginCredentials } from "~/interfaces/user";
import AxiosConnection from "..";

export async function userLogin(credentials: LoginCredentials) {
  const response = await AxiosConnection.api.post(`/auth/login`, credentials);

  if (response.status !== 200) {
    const errorData = response.data || {};
    throw new Error(errorData.message || "Falha na autenticação");
  }

  return response.data;
}
