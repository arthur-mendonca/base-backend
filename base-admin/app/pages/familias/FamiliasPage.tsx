import { CardNavTabs } from "~/components/ui/CardNavTabs";
import { FamiliasComponent } from "./FamiliasComponent";

export const FamiliasPage: React.FC = () => {
  const tabs = [
    {
      key: "familias",
      label: "Famílias",
      content: <FamiliasComponent />,
    },
    {
      key: "pessoas",
      label: "Pessoas",
      content: <FamiliasComponent />,
    },
  ];

  return (
    <div>
      <CardNavTabs tabs={tabs} />
    </div>
  );
};
