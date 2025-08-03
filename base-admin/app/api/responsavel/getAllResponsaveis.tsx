import { getCookie } from "~/utils/cookies";
import axios from "axios";

export async function getAllResponsaveis() {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await axios.get("http://localhost:3001/responsavel", {
      headers: { Authorization: `Bearer ${authToken}` },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao buscar responsáveis."
    );
  }
}
