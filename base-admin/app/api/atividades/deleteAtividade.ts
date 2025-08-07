import { getCookie } from "~/utils/cookies";

export async function deleteAtividade(id: string) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await fetch(`http://localhost:3001/atividade/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao excluir atividade.");
    }

    return { success: true };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao excluir atividade."
    );
  }
}
