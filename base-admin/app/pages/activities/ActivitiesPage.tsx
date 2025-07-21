import { CardNavTabs } from "~/components/ui/CardNavTabs";

export const ActivitiesPage: React.FC = () => {
  const tabs = [
    {
      key: "atividades",
      label: "Atividades",
      content: <div>Conteúdo das Atividades</div>, // Substitua pelo componente real
    },
    {
      key: "registro",
      label: "Registro de atividades",
      content: <div>Conteúdo do Registro de Atividades</div>, // Substitua pelo componente real
    },
  ];
  return (
    <div>
      <CardNavTabs tabs={tabs} />
    </div>
  );
};
