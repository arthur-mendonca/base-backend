import { useCallback, useEffect, useState } from "react";
import { getAllUsers } from "~/api/users/getAllUsers";
import { Table } from "~/components/ui/Table";
import { Spinner } from "~/components/ui/Spinner";
import { useToast } from "~/contexts/ToastContext";
import type { User } from "~/interfaces/user";
import { Button } from "~/components/ui/Button";
import { Modal } from "~/components/ui/Modal";
import { UpdateModal } from "./UpdateModal";
import { updateUser } from "~/api/users/updateUser";
import { deleteUser } from "~/api/users/deleteUser";

export const UsersPage = ({ user }: { user: User }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState({
    updateModal: false,
    createModal: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const fetchUsers = useCallback(async () => {
    try {
      const data = await getAllUsers();
      const filteredUsers = data.filter(
        (fetchedUser: User) => fetchedUser.id_usuario !== user.id_usuario
      );
      setUsers(filteredUsers);
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao buscar usuários"
      );
    } finally {
      setIsLoading(false);
    }
  }, [showToast, user.id_usuario]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "email", label: "Email" },
    { key: "perfil", label: "Perfil" },
    {
      key: "data_cadastro",
      label: "Data de Cadastro",
      render: (value: string) => new Date(value).toLocaleDateString("pt-BR"),
    },
    {
      key: "button",
      label: "Ação",
      render: (_: any, row: User) => (
        <Button
          type="button"
          size="sm"
          text={"Ver Detalhes"}
          onClick={() => {
            setModalOpen({ ...modalOpen, updateModal: true });
            setSelectedUser(row);
          }}
        />
      ),
    },
  ];

  const handleUpdate = async (updateUserData: Partial<User>) => {
    try {
      setIsSubmitting(true);
      if (selectedUser) {
        await updateUser(selectedUser.id_usuario, updateUserData);
        showToast("success", "Usuário atualizado com sucesso!");
        setModalOpen({ ...modalOpen, updateModal: false });
        await fetchUsers();
      }
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao atualizar o perfil."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsSubmitting(true);
      if (selectedUser) {
        await deleteUser(selectedUser.id_usuario);
        showToast("success", "Usuário removido com sucesso!");
        setModalOpen({ ...modalOpen, updateModal: false });
        await fetchUsers();
      }
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao remover usuário."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">Usuários</h1>
        <Button text="Adicionar Usuário" size="sm" />
      </div>

      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Table columns={columns} data={users} />
      )}

      <Modal
        isOpen={modalOpen.updateModal}
        onClose={() => setModalOpen({ ...modalOpen, updateModal: false })}
        title="Detalhes do Usuário"
        showFooter={false}
        children={
          <UpdateModal
            user={selectedUser!}
            onSave={handleUpdate}
            onDelete={handleDelete}
            isDisabled={isSubmitting}
            onCancel={() => setModalOpen({ ...modalOpen, updateModal: false })}
          />
        }></Modal>
    </div>
  );
};
