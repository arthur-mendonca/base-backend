import { useEffect, useState } from "react";
import { getAllUsers } from "~/api/users/getAllUsers";
import { Table } from "~/components/ui/Table";
import { Spinner } from "~/components/ui/Spinner";
import { useToast } from "~/contexts/ToastContext";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        showToast(
          "danger",
          error instanceof Error ? error.message : "Erro ao buscar usuários"
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, [showToast]);

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "email", label: "Email" },
    { key: "perfil", label: "Perfil" },
    {
      key: "data_cadastro",
      label: "Data de Cadastro",
      render: (value: string) => new Date(value).toLocaleDateString("pt-BR"),
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Table columns={columns} data={users} />
      )}
    </div>
  );
};
