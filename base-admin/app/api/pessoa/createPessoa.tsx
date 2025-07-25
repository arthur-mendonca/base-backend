import { getCookie } from "~/utils/cookies";

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
  let response;

  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    response = await fetch("http://localhost:3001/pessoa", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        data_nascimento: new Date(body.data_nascimento).toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao criar pessoa.");
    }

    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao criar pessoa."
    );
  }
}
