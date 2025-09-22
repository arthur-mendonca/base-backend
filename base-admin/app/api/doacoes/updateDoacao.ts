import { getCookie } from "~/utils/cookies";
import type { Doacao } from "~/interfaces/doacao";

export async function updateDoacao(
  doacaoId: string | number,
  payload: Partial<Doacao>
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await fetch(`http://localhost:3001/doacao/${doacaoId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao atualizar doação.");
  }

  return await response.json();
}
