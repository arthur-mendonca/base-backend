import type { CreateAtividadePayload } from "~/interfaces/atividade";
import { getCookie } from "~/utils/cookies";
import axios from "axios";

export async function createAtividade(body: CreateAtividadePayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const payload = {
      ...body,
      horario_inicio: `1970-01-01T${body.horario_inicio}:00.000`,
      horario_fim: `1970-01-01T${body.horario_fim}:00.000`,
    };

    const response = await axios.post(
      `http://localhost:3001/atividade`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 201) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao criar atividade.");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Erro ao criar.");
    }
    throw new Error(
      error instanceof Error ? error.message : "Erro desconhecido."
    );
  }
}
