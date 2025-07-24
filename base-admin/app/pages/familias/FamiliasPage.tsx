import { CardNavTabs } from "~/components/ui/CardNavTabs";
import { FamiliasComponent } from "./FamiliasComponent";
import { PessoasComponent } from "./PessoasComponent";

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
      content: <PessoasComponent />,
    },
  ];

  return (
    <div>
      <CardNavTabs tabs={tabs} />
    </div>
  );
};
