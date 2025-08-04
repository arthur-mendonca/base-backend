import { getCookie } from "~/utils/cookies";

import axios from "axios";
import type { CriancaCreatePayload } from "~/interfaces/crianca";

export async function createCrianca(body: CriancaCreatePayload) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await axios.post(
      "http://localhost:3001/crianca",
      {
        ...body,
        data_nascimento: new Date(body.data_nascimento).toISOString(),
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Erro ao criar criança.");
  }
}
