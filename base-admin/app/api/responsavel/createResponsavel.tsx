import type { CreateResponsavelDto } from "~/interfaces/responsavel";
import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export async function createResponsavel(body: CreateResponsavelDto) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.post(`/responsavel`, body);

    if (response.status !== 201) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao criar responsável.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao criar responsável."
    );
  }
}
