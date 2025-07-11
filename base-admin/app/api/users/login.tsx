import type { LoginCredentials } from "~/interfaces/user";

export async function userLogin(credentials: LoginCredentials) {
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

  return await response.json();
}
