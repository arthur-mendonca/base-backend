import { useState } from "react";
import { useNavigate } from "react-router";
import { eraseCookie, getCookie, setCookie } from "~/utils/cookies";
import { useToast } from "~/contexts/ToastContext";

interface LoginCredentials {
  email: string;
  senha: string;
}

interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    nome: string;
    email: string;
    perfil: string;
  };
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Falha na autenticação");
      }

      const data: AuthResponse = await response.json();

      // Salvar token e usuário em cookies
      setCookie("authToken", data.accessToken, 7); // Expira em 7 dias
      setCookie("user", JSON.stringify(data.user), 7);

      showToast("success", "Login realizado com sucesso!");

      // Redirecionar para a página inicial autenticada
      navigate("/");

      return data;
    } catch (error) {
      showToast(
        "danger",
        error instanceof Error ? error.message : "Erro ao fazer login"
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    eraseCookie("authToken");
    eraseCookie("user");
    navigate("/login");
  };

  const getUser = () => {
    const userStr = getCookie("user");
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error("Erro ao parsear o cookie do usuário:", error);
      eraseCookie("user");
      return null;
    }
  };

  const isAuthenticated = () => {
    return !!getCookie("authToken");
  };

  return { login, logout, getUser, isAuthenticated, isLoading };
}
