import { useState, useEffect } from "react";
import { Button } from "~/components/ui/Button";
import { InputField } from "~/components/ui/InputField";
import { useToast } from "~/contexts/ToastContext";
import { updateFamilia } from "~/api/familias/updateFamilia";
import type { Familia, UpdateFamiliaPayload } from "~/interfaces/familias";

interface ModalEditarFamiliaProps {
  familia: Familia;
  setModalOpen: (isOpen: boolean) => void;
  fetchFamilias: () => Promise<void>;
}

export const ModalEditarFamilia: React.FC<ModalEditarFamiliaProps> = ({
  familia,
  setModalOpen,
  fetchFamilias,
}) => {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<UpdateFamiliaPayload>({});

  useEffect(() => {
    if (familia) {
      setFormData({
        nome: familia.nome || "",
        observacoes: familia.observacoes || undefined,
        id_responsavel: familia.id_responsavel || undefined,
      });
    }
  }, [familia]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateFamilia(familia.id_familia, formData);
      setModalOpen(false);
      fetchFamilias();
      showToast("success", "Família atualizada com sucesso.");
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao atualizar."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleUpdate}>
      <InputField
        label="Nome da Família"
        name="nome"
        value={formData.nome}
        onChange={handleInputChange}
      />
      <InputField
        label="ID do Responsável"
        name="id_responsavel"
        value={formData.id_responsavel}
        onChange={handleInputChange}
      />
      <InputField
        label="Observações"
        name="observacoes"
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
          text="Salvar"
          variant="primary"
          type="submit"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};
