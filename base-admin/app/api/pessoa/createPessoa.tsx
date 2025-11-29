import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

export interface PessoaCreatePayload {
  id_familia?: string;
  nome: string;
  data_nascimento: string;
  rg?: string;
  cpf?: string;
  foto_url?: string;
  observacoes?: string;
}

export async function createPessoa(body: PessoaCreatePayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const payload = {
      ...body,
      data_nascimento: new Date(body.data_nascimento).toISOString(),
    };

    const response = await AxiosConnection.api.post(`/pessoa`, payload);
    if (response.status !== 201) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao criar pessoa.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao criar pessoa."
    );
  }
}
