import { Outlet } from "react-router";
import { AuthLayout } from "~/components/layout/AuthLayout";
import { ToastProvider } from "~/contexts/ToastContext";

export default function AuthLayoutRoute() {
  return (
    <ToastProvider>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </ToastProvider>
  );
}
