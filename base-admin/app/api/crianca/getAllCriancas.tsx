import { getCookie } from "~/utils/cookies";

export async function getAllCriancas() {
  let response;

  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");
    if (!authToken || !userCookie) throw new Error("Não autenticado");

    response = await fetch("http://localhost:3001/crianca", {
      headers: { Authorization: `Bearer ${authToken}` },
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao buscar crianças.");
    }

    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao buscar crianças."
    );
  }
}
