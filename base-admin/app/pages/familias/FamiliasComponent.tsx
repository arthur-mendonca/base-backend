import { useState, useCallback, useEffect } from "react";
import { getAllFamilias } from "~/api/familias/getAllFamilias";
import { Spinner } from "~/components/ui/Spinner";
import { Table } from "~/components/ui/Table";
import { Button } from "./../../components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { Modal } from "~/components/ui/Modal";
import { ModalCriarFamilia } from "./ModalCriarFamilia";

export const FamiliasComponent: React.FC = () => {
  const [familias, setFamilias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchFamilias = useCallback(async () => {
    const data = await getAllFamilias();
    setFamilias(data);
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchFamilias();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchFamilias]);

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "numero_dependentes", label: "Número de Dependentes" },
    { key: "id_responsavel", label: "ID do Responsável" },
    { key: "observacoes", label: "Observações" },
    {
      key: "data_cadastro",
      label: "Data de Cadastro",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
  ];

  return (
    <>
      <div className="flex justify-between py-2">
        <h1 className="text-2xl font-bold mb-4">Famílias</h1>
        <Button
          text={"Adicionar família"}
          size="sm"
          onClick={() => setModalOpen(true)}
        />
      </div>
      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Table columns={columns} data={familias} />
      )}

      <Modal
        title="Criar nova família"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        showFooter={false}>
        <ModalCriarFamilia
          isSubmitting={isSubmitting}
          setIsSubmitting={setIsSubmitting}
          setModalOpen={setModalOpen}
          fetchFamilias={fetchFamilias}
        />
      </Modal>
    </>
  );
};
