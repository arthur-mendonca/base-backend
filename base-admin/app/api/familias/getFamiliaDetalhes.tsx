import type { FamiliaDetalhes } from "~/interfaces/familias";
import { getCookie } from "~/utils/cookies";

export async function getFamiliaDetalhes(
  id: number
): Promise<FamiliaDetalhes | null> {
  let response;

  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");
    if (!authToken || !userCookie) throw new Error("Não autenticado");

    response = await fetch(`http://localhost:3001/familia/detalhes/${id}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "Erro ao buscar detalhes de famílias."
      );
    }

    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "Erro ao buscar detalhes de famílias."
    );
  }
}
