import { getCookie } from "~/utils/cookies";

interface FamiliaCreatePayload {
  nome: string;
  numero_dependentes: number;
  id_responsavel?: number;
  observacoes?: string;
}

export async function createFamilia(body: FamiliaCreatePayload) {
  let response;

  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");
    if (!authToken || !userCookie) throw new Error("Não autenticado");

    response = await fetch("http://localhost:3001/familia", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao criar família.");
    }

    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao criar família."
    );
  }
}
