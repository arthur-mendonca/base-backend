import { getCookie } from "~/utils/cookies";
import type { UpdateResponsavelDto } from "~/interfaces/responsavel";

export async function updateResponsavel(
  id: string,
  body: UpdateResponsavelDto
) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await fetch(`http://localhost:3001/responsavel/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao atualizar responsável.");
    }
    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao atualizar responsável."
    );
  }
}
