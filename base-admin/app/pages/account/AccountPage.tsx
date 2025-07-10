import { Button } from "~/components/ui/Button";
import { useToast } from "~/contexts/ToastContext";

export const AccountPage = () => {
  const { showToast } = useToast();
  return (
    <div>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Toast Examples</h1>

        <div className="flex flex-wrap gap-4">
          <Button
            text="Show Success"
            variant="success"
            onClick={() =>
              showToast("success", "Operação concluída com sucesso!")
            }
          />
          <Button
            text="Show Danger"
            variant="danger"
            onClick={() => showToast("danger", "Falha ao salvar os dados.")}
          />
          <Button
            text="Show Warning"
            variant="secondary"
            onClick={() => showToast("warning", "Sua senha é muito fraca.")}
          />
        </div>
      </div>
    </div>
  );
};
