import type { CriancaUpdatePayload } from "~/interfaces/crianca";
import { getCookie } from "~/utils/cookies";
import axios from "axios";

export async function updateCrianca(id: string, body: CriancaUpdatePayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await axios.patch(
      `http://localhost:3001/crianca/${id}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao atualizar criança.");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Erro ao atualizar.");
    }
    throw new Error(
      error instanceof Error ? error.message : "Erro desconhecido."
    );
  }
}
