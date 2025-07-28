import { getCookie } from "~/utils/cookies";
import type { ProdutoUpdatePayload } from "~/interfaces/produto";

export async function updateProduto(id: string, body: ProdutoUpdatePayload) {
  console.log(`Updating produto with ID: ${id}`, body);

  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await fetch(`http://localhost:3001/produto/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao atualizar produto.");
    }
    return response.json();
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);

    throw new Error(
      error instanceof Error ? error.message : "Erro ao atualizar produto."
    );
  }
}
