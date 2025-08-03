import { getCookie } from "~/utils/cookies";
import axios from "axios";

interface ParamsProps {
  responsavel?: string;
  beneficiario?: string;
  doacao?: string;
}

export async function getAllCestasByParams(params: ParamsProps = {}) {
  try {
    const authToken = getCookie("authToken");
    const userCookie = getCookie("user");
    if (!authToken || !userCookie) throw new Error("Não autenticado");

    const response = await axios.get("http://localhost:3001/cesta-basica", {
      headers: { Authorization: `Bearer ${authToken}` },
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Erro ao buscar cestas básicas."
    );
  }
}
