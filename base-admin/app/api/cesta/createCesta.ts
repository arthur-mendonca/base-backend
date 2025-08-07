import type { CestaCreatePayload } from "~/interfaces/cesta";
import { getCookie } from "~/utils/cookies";

export async function createCesta(body: CestaCreatePayload) {
  let response;

  console.log(`Creating cesta with body:`, body);

  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");
    if (!authToken || !userCookie) throw new Error("Não autenticado");

    response = await fetch("http://localhost:3001/cesta-basica", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Erro ao criar cesta básica.");
    }

    return response.json();
  } catch (error) {
    console.log("Erro ao criar cesta:", error);

    throw new Error(
      error instanceof Error ? error.message : "Erro ao criar cesta básica."
    );
  }
}
