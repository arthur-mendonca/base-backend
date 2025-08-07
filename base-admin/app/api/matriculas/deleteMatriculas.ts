import { getCookie } from "~/utils/cookies";
import axios from "axios";

export async function deleteMatricula(id: string) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await axios.delete(
      `http://localhost:3001/matricula-atividade/${id}`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao excluir matrícula.");
  }
}
