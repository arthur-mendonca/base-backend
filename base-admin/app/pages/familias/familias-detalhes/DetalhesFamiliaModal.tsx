import type { Familia } from "~/interfaces/familias";

interface DetalhesFamiliaModalProps {
  familia: Familia | null;
  setModalOpen: (isOpen: boolean) => void;
}

export const DetalhesFamiliaModal: React.FC<DetalhesFamiliaModalProps> = ({
  familia,
  setModalOpen,
}) => {
  if (!familia) return null;

  return (
    <div>
      <h2>Detalhes da Família</h2>
      <p>Nome: {familia.nome}</p>
      <p>Número de Dependentes: {familia.numero_dependentes}</p>
      <p>Responsável: {familia.responsavel?.nome || "-"}</p>
      <p>Observações: {familia.observacoes}</p>
      <p>
        Data de Cadastro: {new Date(familia.data_cadastro).toLocaleDateString()}
      </p>
    </div>
  );
};
