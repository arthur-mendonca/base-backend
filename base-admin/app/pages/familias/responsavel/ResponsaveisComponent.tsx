import { useState, useCallback, useEffect } from "react";
import { Spinner } from "~/components/ui/Spinner";
import { Table } from "~/components/ui/Table";
import { Button } from "~/components/ui/Button";
import { Modal } from "~/components/ui/Modal";
import { useToast } from "~/contexts/ToastContext";
import { getAllResponsaveis } from "~/api/responsavel/getAllResponsaveis";
import type { Responsavel } from "~/interfaces/responsavel";
import { ModalCriarResponsavel } from "./CreateResponsavelModal";

export const ResponsaveisComponent: React.FC = () => {
  const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  // Adicione estados para os outros modais (details, edit) e para o item selecionado

  const { showToast } = useToast();

  const fetchResponsaveis = useCallback(async () => {
    try {
      const data = await getAllResponsaveis();
      setResponsaveis(data);
    } catch (error) {
      showToast("danger", "Erro ao carregar responsáveis.");
    }
  }, [showToast]);

  useEffect(() => {
    setIsLoading(true);
    fetchResponsaveis().finally(() => setIsLoading(false));
  }, [fetchResponsaveis]);

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "cpf", label: "CPF" },
    { key: "telefone", label: "Telefone" },
    {
      key: "actions",
      label: "Ações",
      render: (_: any, row: Responsavel) => (
        <div className="flex gap-2">
          {/* Adicione botões de Detalhes, Editar, Excluir aqui */}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between py-2">
        <h1 className="text-2xl font-bold mb-4">Responsáveis</h1>
        <Button
          text={"Adicionar Responsável"}
          size="sm"
          onClick={() => setCreateModalOpen(true)}
        />
      </div>

      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Table columns={columns} data={responsaveis} />
      )}

      <Modal
        title="Criar Novo Responsável"
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        showFooter={false}>
        <ModalCriarResponsavel
          setModalOpen={setCreateModalOpen}
          fetchResponsaveis={fetchResponsaveis}
        />
      </Modal>

      {/* Adicione os outros modais (Detalhes, Edição) aqui */}
    </>
  );
};
