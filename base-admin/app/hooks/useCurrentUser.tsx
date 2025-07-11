import { useState, useEffect } from "react";
import { useAuth } from "~/hooks/useAuth";
import type { User } from "~/interfaces/user";

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return decodeURIComponent(match[2]);
  }
}

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  const authenticated = isAuthenticated();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!authenticated) {
        setError("Usuário não autenticado.");
        setIsLoading(false);
        return;
      }

      try {
        const authToken = getCookie("authToken");
        const userCookie = getCookie("user");

        if (!authToken || !userCookie) throw new Error("Não autenticado");

        const userFromCookie = JSON.parse(userCookie);
        const userId = userFromCookie.id;

        const response = await fetch(
          `http://localhost:3001/usuario/${userId}`,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );

        if (!response.ok) throw new Error("Falha ao buscar dados do usuário");

        const userData: User = await response.json();
        setUser(userData);
      } catch (err: any) {
        setError(err.message || "Ocorreu um erro ao carregar os dados.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [authenticated]);

  return { user, isLoading, error };
}
