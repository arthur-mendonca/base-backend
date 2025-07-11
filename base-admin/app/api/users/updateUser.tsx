import { getCookie } from "~/utils/cookies";
import type { UserUpdatePayload } from "~/interfaces/user";

export async function updateUser(
  userId: string | number,
  payload: UserUpdatePayload
) {
  const authToken = getCookie("authToken");
  if (!authToken) throw new Error("Usuário não autenticado.");

  const response = await fetch(`http://localhost:3001/usuario/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao atualizar o perfil.");
  }

  return await response.json();
}
