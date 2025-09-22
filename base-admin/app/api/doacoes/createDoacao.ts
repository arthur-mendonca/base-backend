import { getCookie } from "~/utils/cookies";
import type { Doacao } from "~/interfaces/doacao";

export async function createDoacao(payload: Omit<Doacao, 'id_doacao'>) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await fetch(`http://localhost:3001/doacao`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || "Ocorreu um erro ao criar a doação."
    );
  }

  return await response.json();
}
