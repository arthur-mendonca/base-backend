import type { UpdateMatriculaPayload } from "~/interfaces/matricula";
import { getCookie } from "~/utils/cookies";
import axios from "axios";

export async function updateMatricula(
  id: string,
  body: UpdateMatriculaPayload
) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await axios.patch(
      `http://localhost:3001/matricula-atividade/${id}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Erro ao atualizar matrícula."
      );
    }
    throw new Error("Erro desconhecido ao atualizar matrícula.");
  }
}
