import axios from "axios";
import { getCookie } from "~/utils/cookies";

export async function getAllMatriculas() {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await axios.get(
      "http://localhost:3001/matricula-atividade",
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar matrículas.");
  }
}
