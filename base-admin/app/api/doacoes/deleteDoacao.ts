import { getCookie } from "~/utils/cookies";

export async function deleteDoacao(doacaoId: string) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await fetch(
    `http://localhost:3001/doacao/${doacaoId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao remover doação.");
  }

  return { success: true };
}
