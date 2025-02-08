// src/pages/AdminPosts.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
// import { PostForm } from "@/components/PostForm";
import { Button } from "@/components/ui/button";

export const AdminPosts = () => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
  }, [admin, navigate]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{admin?.email}</span>
          <Button onClick={logout} variant="outline">
            Logout
          </Button>
        </div>
      </div>

      {/* <PostForm /> */}
      {/* Add your posts list component here */}
    </div>
  );
};
