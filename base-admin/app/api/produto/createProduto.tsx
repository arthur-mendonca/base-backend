import type { ProdutoCreatePayload } from "~/interfaces/produto";
import { getCookie } from "~/utils/cookies";

export async function createProduto(body: ProdutoCreatePayload) {
  let response;
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    response = await fetch("http://localhost:3001/produto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao criar produto.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao criar produto."
    );
  }
}
