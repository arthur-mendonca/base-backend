import type { Voluntario } from "~/interfaces/volunteers";

interface DetailsModalProps {
  selectedVolunteer: Voluntario | null;
}

export const DetailsModal = ({ selectedVolunteer }: DetailsModalProps) => {
  return (
    <div>
      <h2>Detalhes do Voluntário</h2>
      <p>
        <strong>Nome:</strong> {selectedVolunteer?.nome}
      </p>
      <p>
        <strong>Email:</strong> {selectedVolunteer?.email}
      </p>
      <p>
        <strong>Telefone:</strong> {selectedVolunteer?.telefone}
      </p>
      <p>
        <strong>Data de Cadastro:</strong>{" "}
        {selectedVolunteer?.data_cadastro
          ? new Date(selectedVolunteer.data_cadastro).toLocaleDateString(
              "pt-BR"
            )
          : ""}
      </p>
    </div>
  );
};
