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
