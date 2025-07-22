import { CardNavTabs } from "~/components/ui/CardNavTabs";
import { ActivitiesComponent } from "./ActivitiesComponent";

export const ActivitiesPage: React.FC = () => {
  const tabs = [
    {
      key: "atividades",
      label: "Atividades",
      content: <ActivitiesComponent />,
    },
    {
      key: "registro",
      label: "Registro de atividades",
      content: <div>Conteúdo do Registro de Atividades</div>,
    },
  ];
  return (
    <div>
      <CardNavTabs tabs={tabs} />
    </div>
  );
};
