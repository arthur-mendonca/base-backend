import { useCallback, useEffect, useState } from "react";
import { Table } from "~/components/ui/Table";
import { Spinner } from "~/components/ui/Spinner";
import { useToast } from "~/contexts/ToastContext";
import { getAllAtividades } from "~/api/atividades/getAllAtividades";

interface Atividade {
  id_atividade: string;
  nome: string;
  descricao: string;
  tipo: string;
  publico_alvo: string;
  dias_semana: string;
  horario_inicio: string;
  horario_fim: string;
}

export const ActivitiesComponent: React.FC = () => {
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useToast();

  const fetchAtividades = useCallback(async () => {
    const data = await getAllAtividades();
    console.log("Atividades fetched successfully:", data);
    setAtividades(data);
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchAtividades();
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao buscar atividades"
      );
    } finally {
      setIsLoading(false);
    }
  }, [showToast]);

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "descricao", label: "Descrição" },
    { key: "tipo", label: "Tipo" },
    { key: "publico_alvo", label: "Público Alvo" },
    {
      key: "dias_semana",
      label: "Dias da Semana",
      render: (value: string) =>
        value
          .split(",")
          .map(
            (dia) =>
              ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][
                parseInt(dia, 10)
              ] || dia
          )
          .join(", "),
    },
    {
      key: "horario_inicio",
      label: "Início",
      render: (value: string) =>
        new Date(value).toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
    {
      key: "horario_fim",
      label: "Fim",
      render: (value: string) =>
        new Date(value).toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Atividades</h1>
      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Table columns={columns} data={atividades} />
      )}
    </div>
  );
};
