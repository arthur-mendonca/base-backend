import { useCallback, useEffect, useState } from "react";
import { getAllVolunteers } from "~/api/voluntarios/getAllVoluntarios";
import { PageContainer } from "~/components/layout/PageContainer";
import { Button } from "~/components/ui/Button";
import { Modal } from "~/components/ui/Modal";
import { Spinner } from "~/components/ui/Spinner";
import { Table } from "~/components/ui/Table";
import { useToast } from "~/contexts/ToastContext";
import type { Voluntario } from "~/interfaces/volunteers";
import { DetailsModal } from "./DetailsModal";

export const VolunteersPage = () => {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [volunteers, setVolunteers] = useState<Voluntario[]>([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState<Voluntario | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState({
    detailsModal: false,
    createModal: false,
  });

  const fetchVolunteers = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getAllVolunteers();
      setVolunteers(response);
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error
          ? error.message
          : "Erro ao carregar dados de voluntários."
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVolunteers();
  }, [fetchVolunteers]);

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "email", label: "E-mail" },
    { key: "telefone", label: "Telefone" },
    {
      key: "data_cadastro",
      label: "Data cadastro",
      render: (value: string) => new Date(value).toLocaleDateString("pt-BR"),
    },
    {
      key: "button",
      label: "Ação",
      render: (_: any, row: Voluntario) => (
        <Button
          text="Detalhes"
          size="sm"
          disabled={isLoading}
          onClick={() => {
            setSelectedVolunteer(row);
            setModalOpen({ ...modalOpen, detailsModal: true });
          }}
        />
      ),
    },
  ];

  return (
    <PageContainer
      title="Voluntários"
      actions={
        <Button text="Adicionar Voluntário" size="sm" disabled={isLoading} />
      }>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
      <div className="mt-4">
        <Table
          columns={columns}
          data={volunteers}
          className="w-full"
          sortKey="data_cadastro"
          sortDirection="desc"
        />
      </div>

      {/* Modal Detalhes */}
      <Modal
        backgroundColor="bg-gray-600"
        textColor="text-white"
        showFooter={false}
        title="Detalhes do Voluntário"
        isOpen={modalOpen.detailsModal}
        onClose={() => setModalOpen({ ...modalOpen, detailsModal: false })}>
        {selectedVolunteer ? (
          <DetailsModal selectedVolunteer={selectedVolunteer} />
        ) : null}
      </Modal>
    </PageContainer>
  );
};
