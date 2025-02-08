// src/context/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  token: string | null;
  user: { isAdmin: boolean } | null;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [admin, setAdmin] = useState<{
    email: string;
    isAdmin: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem("adminToken");
      if (storedToken) {
        try {
          // Verify token with backend
          const response = await fetch("http://localhost:3001/api/v1/me", {
            headers: { Authorization: `Bearer ${storedToken}` },
          });

          if (response.ok) {
            const data = await response.json();
            setToken(storedToken);
            setAdmin(data.admin);
          } else {
            localStorage.removeItem("adminToken");
          }
        } catch (error) {
          console.error("Auth verification failed:", error);
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (newToken: string) => {
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);

    const response = await fetch("http://localhost:3001/api/v1/me", {
      headers: { Authorization: `Bearer ${newToken}` },
    });
    const data = await response.json();
    console.log("data", data);
    setAdmin(data.admin);
    navigate("/admin");
  };

  const logout = async () => {
    try {
      // Send logout request to server with auth token
      await fetch("http://localhost:3001/api/v1/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear local storage and state regardless of server response
      localStorage.removeItem("adminToken");
      setToken(null);
      setAdmin(null);
      navigate("/admin/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user: admin ? { isAdmin: true } : null,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
