import { useState } from "react";
import { createResponsavel } from "~/api/responsavel/createResponsavel";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { useToast } from "~/contexts/ToastContext";
import type { CreateResponsavelDto } from "~/interfaces/responsavel";

interface ModalCriarResponsavelProps {
  setModalOpen: (isOpen: boolean) => void;
  fetchResponsaveis: () => Promise<void>;
}

export const ModalCriarResponsavel: React.FC<ModalCriarResponsavelProps> = ({
  setModalOpen,
  fetchResponsaveis,
}) => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CreateResponsavelDto>({
    nome: "",
    cpf: "",
    rg: "",
    data_nascimento: "",
    telefone: "",
    endereco: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = {
        ...formData,
        data_nascimento: new Date(formData.data_nascimento).toISOString(),
      };
      await createResponsavel(body);
      setModalOpen(false);
      fetchResponsaveis();
      showToast("success", "Responsável criado com sucesso.");
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao criar."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleCreate}>
      <InputField
        label="Nome Completo"
        name="nome"
        value={formData.nome}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="CPF"
        name="cpf"
        value={formData.cpf}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="RG"
        name="rg"
        value={formData.rg}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Data de Nascimento"
        name="data_nascimento"
        type="date"
        value={formData.data_nascimento}
        // new Date(body.data_nascimento).toISOString();
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Telefone"
        name="telefone"
        value={formData.telefone}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Endereço"
        name="endereco"
        value={formData.endereco}
        onChange={handleInputChange}
        required
      />
      <InputField
        label="Email (Opcional)"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <InputField
        label="Ocupação (Opcional)"
        name="ocupacao"
        value={formData.ocupacao}
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
  );
};
