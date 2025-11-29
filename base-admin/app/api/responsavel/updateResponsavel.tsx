import { getCookie } from "~/utils/cookies";
import type { UpdateResponsavelDto } from "~/interfaces/responsavel";
import AxiosConnection from "..";

export async function updateResponsavel(
  id: string,
  body: UpdateResponsavelDto
) {
  try {
    const authToken = getCookie("authToken");
    if (!authToken) throw new Error("Não autenticado");

    const response = await AxiosConnection.api.patch(`/responsavel/${id}`, body);

    if (response.status !== 200) {
      const errorData = response.data || {};
      throw new Error(errorData.message || "Erro ao atualizar responsável.");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Erro ao atualizar responsável."
    );
  }
}
