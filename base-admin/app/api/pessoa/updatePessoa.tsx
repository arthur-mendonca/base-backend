import type { UpdatePessoaPayload } from "~/interfaces/pessoa";
import { getCookie } from "~/utils/cookies";

export async function updatePessoa(id: string, body: UpdatePessoaPayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await fetch(`http://localhost:3001/pessoa/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      // Filtra chaves com valores undefined ou nulos para não enviá-las
      body: JSON.stringify(
        Object.fromEntries(
          Object.entries(body).filter(([, value]) => value != null)
        )
      ),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao atualizar pessoa.");
    }
    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao atualizar pessoa."
    );
  }
}
