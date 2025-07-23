import { CardNavTabs } from "~/components/ui/CardNavTabs";
import { Table } from "~/components/ui/Table";
import { getAllFamilias } from "~/api/familias/getAllFamilias";
import { useState, useCallback, useEffect } from "react";

export const FamiliasPage: React.FC = () => {
  const [familias, setFamilias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    { key: "data_cadastro", label: "Data de Cadastro" },
  ];

  return (
    <div>
      <CardNavTabs
        tabs={[
          {
            key: "familias",
            label: "Famílias",
            content: <Table columns={columns} data={familias} />,
          },
        ]}
      />
    </div>
  );
};
