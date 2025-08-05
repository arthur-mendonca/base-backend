import { CardNavTabs } from "~/components/ui/CardNavTabs";
import { AtividadesComponent } from "./AtividadesComponent";

export const AtividadesPage: React.FC = () => {
  const tabs = [
    {
      key: "atividades",
      label: "Atividades",
      content: <AtividadesComponent />,
    },
    {
      key: "matriculas",
      label: "Matrículas",
      content: <div>Conteúdo do Registro de Matrículas</div>,
    },
  ];
  return (
    <div>
      <CardNavTabs tabs={tabs} />
    </div>
  );
};
