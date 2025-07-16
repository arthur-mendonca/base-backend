import { getCookie } from "~/utils/cookies";
import type { Voluntario } from "~/interfaces/volunteers";

export async function updateVolunteer(
  volunteerId: string | number,
  payload: Partial<Voluntario>
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await fetch(
    `http://localhost:3001/voluntario/${volunteerId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao atualizar voluntário.");
  }

  return await response.json();
}
