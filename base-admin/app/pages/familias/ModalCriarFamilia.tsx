import { useState } from "react";
import { createFamilia } from "~/api/familias/createFamilia";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { useToast } from "~/contexts/ToastContext";

interface ModalCriarFamiliaProps {
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fetchFamilias: () => Promise<void>;
}

export const ModalCriarFamilia: React.FC<ModalCriarFamiliaProps> = ({
  isSubmitting,
  setIsSubmitting,
  setModalOpen,
  fetchFamilias,
}) => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    nome: "",
    numero_dependentes: "",
    id_responsavel: "",
    observacoes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateFamilia = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = {
        nome: formData.nome,
        numero_dependentes: Number(formData.numero_dependentes),
        ...(formData.id_responsavel && {
          id_responsavel: formData.id_responsavel,
        }),
        ...(formData.observacoes && { observacoes: formData.observacoes }),
      };

      await createFamilia(body);

      setModalOpen(false);
      setFormData({
        nome: "",
        numero_dependentes: "",
        id_responsavel: "",
        observacoes: "",
      });
      fetchFamilias();
      showToast("success", "Família criada com sucesso.");
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao criar família."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleCreateFamilia}>
        <InputField
          label="Nome"
          id="nome"
          name="nome"
          required
          value={formData.nome}
          onChange={handleInputChange}
        />
        <InputField
          label="Número de Dependentes"
          id="numero_dependentes"
          name="numero_dependentes"
          type="number"
          required
          value={formData.numero_dependentes}
          onChange={handleInputChange}
        />
        <InputField
          label="ID do Responsável"
          id="id_responsavel"
          name="id_responsavel"
          type="text"
          value={formData.id_responsavel}
          onChange={handleInputChange}
        />
        <InputField
          label="Observações"
          id="observacoes"
          name="observacoes"
          type="text"
          value={formData.observacoes}
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
    </>
  );
};
