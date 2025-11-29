import { getCookie } from "~/utils/cookies";
import AxiosConnection from "..";

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

    const response = await AxiosConnection.api.get(`/cesta-basica`, {
      params,
    });

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao buscar cestas básicas.");
    }

    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao buscar cestas básicas."
    );
  }
}
