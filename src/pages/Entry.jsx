import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext.jsx"; // adapte le chemin chez toi
import PresentationPage from "./Presentation.jsx";

export default function EntryPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/map", { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-sm text-neutral-600">Chargement…</div>
      </div>
    );
  }

  // Si connecté => la redirection est gérée par useEffect
  if (user) return <Navigate to="/map" replace />;

  // Sinon => page de présentation
  return <PresentationPage />;
}
