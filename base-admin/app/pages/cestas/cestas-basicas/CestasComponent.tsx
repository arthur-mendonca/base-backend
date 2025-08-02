import { useState, useCallback, useEffect } from "react";
import { Spinner } from "~/components/ui/Spinner";
import { Table } from "~/components/ui/Table";
import { Button } from "~/components/ui/Button";
import { Modal } from "~/components/ui/Modal";
import { useToast } from "~/contexts/ToastContext";
import { CriarCestaModal } from "./CriarCestaModal";
import type { CestaBasica } from "~/interfaces/cesta";
import { getAllCestas } from "~/api/cesta/getAllCestas";

export const CestasComponent: React.FC = () => {
  const { showToast } = useToast();
  const [cestas, setCestas] = useState<CestaBasica[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedCesta, setSelectedCesta] = useState<CestaBasica | null>(null);

  const fetchCestas = useCallback(async () => {
    try {
      const data = await getAllCestas();
      setCestas(data);
    } catch (error) {
      showToast("danger", "Erro ao buscar cestas.");
    }
  }, [showToast]);

  useEffect(() => {
    setIsLoading(true);
    fetchCestas().finally(() => setIsLoading(false));
  }, [fetchCestas]);

  const columns = [
    {
      key: "beneficiario",
      label: "Beneficiário",
      render: (_: any, row: CestaBasica) =>
        row.responsavel?.nome || row.beneficiario_externo?.nome || "-",
    },
    {
      key: "data_entrega",
      label: "Data de Entrega",
      render: (value: string) => new Date(value).toLocaleDateString("pt-BR"),
    },
    {
      key: "produtos_count",
      label: "Qtd Produtos",
      render: (_: any, row: CestaBasica) => row.produtos?.length || 0,
    },
    {
      key: "actions",
      label: "Ações",
      render: (_: any, row: CestaBasica) => (
        <div className="flex gap-2">
          <Button
            text="Detalhes"
            size="sm"
            variant="success"
            onClick={() => {
              setSelectedCesta(row);
              setDetailsModalOpen(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between py-2">
        <h1 className="text-2xl font-bold mb-4">Cestas Básicas</h1>
        <Button
          text="Nova Cesta"
          size="sm"
          onClick={() => setCreateModalOpen(true)}
        />
      </div>

      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Table columns={columns} data={cestas} />
      )}

      <Modal
        title="Nova Cesta Básica"
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        showFooter={false}
        size="xl">
        <CriarCestaModal
          onClose={() => setCreateModalOpen(false)}
          fetchCestas={fetchCestas}
        />
      </Modal>

      {/* {selectedCesta && (
        <Modal
          title="Detalhes da Cesta"
          isOpen={detailsModalOpen}
          onClose={() => setDetailsModalOpen(false)}
          showFooter={false}
          size="lg">
          <DetalhesCestaModal cesta={selectedCesta} />
        </Modal>
      )} */}
    </>
  );
};
