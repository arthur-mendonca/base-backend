import { useCallback, useEffect, useState } from "react";
import { deleteMatricula } from "~/api/matriculas/deleteMatriculas";
import { getAllMatriculas } from "~/api/matriculas/getAllMatriculas";
import { Button } from "~/components/ui/Button";
import { Modal } from "~/components/ui/Modal";
import { Spinner } from "~/components/ui/Spinner";
import { Table } from "~/components/ui/Table";
import { useToast } from "~/contexts/ToastContext";
import { statusMatriculaBadge } from "~/enums/matriculas";
import type { Matricula } from "~/interfaces/matricula";
import { ModalCriarMatricula } from "./ModalCriarMatricula";
import { ModalEditarMatricula } from "./ModalEditarMatricula";

export const MatriculasComponent: React.FC = () => {
  const { showToast } = useToast();
  const [matriculas, setMatriculas] = useState<Matricula[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMatricula, setSelectedMatricula] = useState<Matricula | null>(
    null
  );
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const fetchMatriculas = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getAllMatriculas();
      setMatriculas(data);
    } catch (error) {
      showToast("danger", "Erro ao buscar matrículas.");
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    fetchMatriculas();
  }, [fetchMatriculas]);

  const handleOpenEdit = (matricula: Matricula) => {
    setSelectedMatricula(matricula);
    setEditModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (
      window.confirm(
        "Tem certeza que deseja excluir esta matrícula? Esta ação não pode ser desfeita."
      )
    ) {
      try {
        await deleteMatricula(id);
        fetchMatriculas();
        showToast("success", "Matrícula excluída com sucesso.");
      } catch (error) {
        showToast("danger", "Erro ao excluir matrícula.");
      }
    }
  };

  const columns = [
    {
      key: "pessoa.nome",
      label: "Criança",
      render: (_: any, row: Matricula) => {
        console.log("Dados da matrícula:", row);
        return row.crianca?.nome || "—";
      },
    },
    {
      key: "atividade.nome",
      label: "Atividade",
      render: (_: any, row: Matricula) => row.atividade.nome,
    },
    {
      key: "data_matricula",
      label: "Data da Matrícula",
      render: (value: string) => new Date(value).toLocaleDateString("pt-BR"),
    },
    {
      key: "status",
      label: "Status",
      render: (value: Matricula["status"]) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${statusMatriculaBadge[value]}`}>
          {value}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Ações",
      render: (_: any, row: Matricula) => (
        <div className="flex gap-2">
          <Button
            text="Editar Status"
            size="sm"
            onClick={() => handleOpenEdit(row)}
          />
          <Button
            text="Excluir"
            size="sm"
            variant="danger"
            onClick={() => void handleDelete(row.id_matricula)}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button
          text="Nova Matrícula"
          onClick={() => setCreateModalOpen(true)}
        />
      </div>

      {isLoading ? <Spinner /> : <Table columns={columns} data={matriculas} />}

      <Modal
        title="Nova Matrícula"
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        showFooter={false}
        size="xl">
        <ModalCriarMatricula
          setModalOpen={setCreateModalOpen}
          fetchMatriculas={fetchMatriculas}
        />
      </Modal>

      <Modal
        title="Editar Status da Matrícula"
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        showFooter={false}
        size="xl">
        <ModalEditarMatricula
          matricula={selectedMatricula}
          setModalOpen={setEditModalOpen}
          fetchMatriculas={fetchMatriculas}
        />
      </Modal>
    </>
  );
};
