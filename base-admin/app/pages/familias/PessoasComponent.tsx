import { useState, useCallback, useEffect } from "react";
import { getAllPessoas } from "~/api/pessoa/getAllPessoas";
import { Spinner } from "~/components/ui/Spinner";
import { Table } from "~/components/ui/Table";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { Modal } from "~/components/ui/Modal";

export const PessoasComponent: React.FC = () => {
  const [pessoas, setPessoas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchPessoas = useCallback(async () => {
    try {
      const data = await getAllPessoas();
      setPessoas(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchPessoas().finally(() => setIsLoading(false));
  }, [fetchPessoas]);

  const columns = [
    { key: "nome", label: "Nome" },
    { key: "cpf", label: "CPF" },
    {
      key: "data_nascimento",
      label: "Data de Nascimento",
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    { key: "telefone", label: "Telefone" },
    { key: "email", label: "Email" },
  ];

  // Exemplo de formulário para adicionar pessoa (adapte conforme sua API)
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    data_nascimento: "",
    telefone: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreatePessoa = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3001/pessoa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Erro ao criar pessoa.");
      }
      setModalOpen(false);
      setFormData({
        nome: "",
        cpf: "",
        data_nascimento: "",
        telefone: "",
        email: "",
      });
      fetchPessoas();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Erro ao criar pessoa.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex justify-between py-2">
        <h1 className="text-2xl font-bold mb-4">Pessoas</h1>
        <Button
          text={"Adicionar pessoa"}
          size="sm"
          onClick={() => setModalOpen(true)}
        />
      </div>
      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <Table columns={columns} data={pessoas} />
      )}

      <Modal
        title="Criar nova pessoa"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        showFooter={false}>
        <form className="space-y-4" onSubmit={handleCreatePessoa}>
          <InputField
            label="Nome"
            id="nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleInputChange}
          />
          <InputField
            label="CPF"
            id="cpf"
            name="cpf"
            required
            value={formData.cpf}
            onChange={handleInputChange}
          />
          <InputField
            label="Data de Nascimento"
            id="data_nascimento"
            name="data_nascimento"
            type="date"
            required
            value={formData.data_nascimento}
            onChange={handleInputChange}
          />
          <InputField
            label="Telefone"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="flex justify-end gap-2 pt-4">
            <Button
              text="Cancelar"
              variant="secondary"
              onClick={() => setModalOpen(false)}
              type="button"
              disabled={isSubmitting}
            />
            <Button
              text="Criar"
              variant="primary"
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};
