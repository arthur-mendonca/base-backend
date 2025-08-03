import type { r } from "node_modules/@react-router/dev/dist/routes-DHIOx0R9";
import type { CreateResponsavelDto } from "~/interfaces/responsavel";
import { getCookie } from "~/utils/cookies";

export async function createResponsavel(body: CreateResponsavelDto) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await fetch("http://localhost:3001/responsavel", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao criar responsável.");
    }
    return response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro desconhecido."
    );
  }
}
