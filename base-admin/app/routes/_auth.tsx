import { useEffect } from "react";
import {
  Outlet,
  redirect,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router";
import { AuthLayout } from "~/components/layout/AuthLayout";
import { useAuth } from "~/hooks/useAuth";

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookies = new URLSearchParams(cookieHeader?.replace(/; /g, "&"));
  const authToken = cookies.get("authToken");

  if (!authToken) {
    throw redirect("/login");
  }

  return null;
}

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
