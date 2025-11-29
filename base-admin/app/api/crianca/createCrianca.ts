import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";
import type { CriancaCreatePayload } from "~/interfaces/crianca";

export async function createCrianca(body: CriancaCreatePayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const payload = {
      ...body,
      data_nascimento: new Date(body.data_nascimento).toISOString(),
    };

    const response = await AxiosConnection.api.post(`/crianca`, payload);

    if (response.status !== 201) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao criar criança.");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Erro ao criar criança.");
  }
}
