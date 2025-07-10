import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Modal } from "../../components/ui/Modal";
import { useState } from "react";
import { Spinner } from "~/components/ui/Spinner";
import { Table } from "~/components/ui/Table";

export function Welcome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSort = (key: string) => {
    console.log("Sort by:", key);
    // Implementar lógica de ordenação
  };

  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <Button text="Get Started" variant="success" size="md" />
      <Button
        text="Open Modal"
        variant="primary"
        size="md"
        onClick={() => setIsModalOpen(true)}
      />
      <Card
        description={
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
        }
        title="Título"
        buttonText="Botão"
        variant="button"
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Terms of Service"
        primaryButtonText="I accept"
        secondaryButtonText="Decline"
        onPrimaryAction={() => console.log("Accepted")}
        onSecondaryAction={() => console.log("Declined")}
        size="md">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new
          consumer privacy laws for its citizens, companies around the world are
          updating their terms of service agreements to comply.
        </p>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union's General Data Protection Regulation (G.D.P.R.)
          goes into effect on May 25 and is meant to ensure a common set of data
          rights in the European Union.
        </p>
      </Modal>

      <Spinner
        size="md"
        color="primary"
        text="Processando..."
        className="flex items-center justify-center p-4"
      />
      <Table columns={columns} data={data} onSort={handleSort} />
    </main>
  );
}

const data = [
  {
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
];

const columns = [
  {
    key: "name",
    label: "Product name",
    sortable: false,
  },
  {
    key: "color",
    label: "Color",
    sortable: true,
  },
  {
    key: "category",
    label: "Category",
    sortable: true,
  },
  {
    key: "price",
    label: "Price",
    sortable: true,
  },
  {
    key: "actions",
    label: "",
    render: (value, row) => (
      <div className="text-right">
        <a
          href="#"
          className="font-medium text-primary dark:text-primary hover:underline"
          onClick={() => console.log("Edit", row)}>
          Edit
        </a>
      </div>
    ),
  },
];
