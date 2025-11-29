import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

interface FamiliaCreatePayload {
  nome: string;
  numero_dependentes: number;
  id_responsavel?: number;
  observacoes?: string;
}

export async function createFamilia(body: FamiliaCreatePayload) {
  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");
    if (!authToken || !userCookie) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.post(`/familia`, body);
    if (response.status !== 201) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao criar família.");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao criar família."
    );
  }
}
