import type { User } from "~/interfaces/user";

interface CreateModalProps {
  onCreate: (newUser: Partial<User>) => void;
  onCancel: () => void;
  isDisabled?: boolean;
}

export const CreateModal = ({
  onCancel,
  onCreate,
  isDisabled,
}: CreateModalProps) => {};
