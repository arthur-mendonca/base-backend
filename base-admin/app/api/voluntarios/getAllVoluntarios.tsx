import { getCookie } from "~/utils/cookies";

export async function getAllVolunteers() {
  let response;

  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");

    if (!authToken || !userCookie) throw new Error("Não autenticado");

    response = await fetch(`http://localhost:3001/voluntario`, {
      headers: { Authorization: `Bearer ${authToken}` },
    });

    return response.json();
  } catch (error) {
    const errorData = await response?.json().catch(() => ({}));
    throw new Error(
      errorData.message || "Erro ao buscar informações de voluntários."
    );
  }
}
