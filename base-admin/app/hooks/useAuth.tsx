import { useState } from "react";
import { useNavigate } from "react-router";
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
      // Substitua esta URL pela sua API real
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

      // Salvar token no localStorage (ou use cookies para maior segurança)
      localStorage.setItem("authToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      showToast("success", "Login realizado com sucesso!");

      // Redirecionar para a página inicial autenticada
      navigate("/");

      return data;
    } catch (error) {
      console.log("Login error:", error);

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
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getUser = () => {
    const userStr = localStorage.getItem("user");
    if (!userStr) return null;
    return JSON.parse(userStr);
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };

  return { login, logout, getUser, isAuthenticated, isLoading };
}
