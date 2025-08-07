import type { CreateMatriculaPayload } from "~/interfaces/matricula";
import { getCookie } from "~/utils/cookies";
import axios from "axios";

export async function createMatricula(body: CreateMatriculaPayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await axios.post(
      "http://localhost:3001/matricula-atividade",
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
        error.response.data.message || "Erro ao criar matrícula."
      );
    }
    throw new Error("Erro desconhecido ao criar matrícula.");
  }
}
