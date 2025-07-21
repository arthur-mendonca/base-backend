import { getCookie } from "~/utils/cookies";
import type { CreateVolunteerPayload } from "~/interfaces/volunteers";

export async function createVolunteer(payload: CreateVolunteerPayload) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await fetch(`http://localhost:3001/voluntario`, {
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
      errorData.message || "Ocorreu um erro ao criar o voluntário."
    );
  }

  return await response.json();
}
