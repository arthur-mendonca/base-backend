import { getCookie } from "~/utils/cookies";

export async function getAllProdutos() {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await fetch("http://localhost:3001/produto", {
      method: "GET",
      headers: { Authorization: `Bearer ${authToken}` },
    });

    if (!response.ok) throw new Error("Erro ao buscar produtos.");
    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro desconhecido."
    );
  }
}
