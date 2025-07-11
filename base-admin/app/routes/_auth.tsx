import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthLayout } from "~/components/layout/AuthLayout";
import { useAuth } from "~/hooks/useAuth";

export default function AuthLayoutRoute() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
