import { getCookie } from "~/utils/cookies";

export async function deleteProduto(id: string) {
  console.log(`Deleting produto with ID: ${id}`);

  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await fetch(`http://localhost:3001/produto/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao deletar produto.");
    }
  } catch (error) {
    console.error("Erro ao deletar produto:", error);

    throw new Error(
      error instanceof Error ? error.message : "Erro ao deletar produto."
    );
  }
}
