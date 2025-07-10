import { Outlet } from "react-router";
import { PublicLayout } from "~/components/layout/PublicLayout";
import { ToastProvider } from "~/contexts/ToastContext";

export default function PublicLayoutRoute() {
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
}
