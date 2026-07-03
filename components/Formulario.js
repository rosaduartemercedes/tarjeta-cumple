"use client";
import { useState, useEffect } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const yaConfirmo = localStorage.getItem("asistencia_confirmada");
    if (yaConfirmo === "true") {
      setStatus("success");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/confirmar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      });

      if (res.ok) {
        localStorage.setItem("asistencia_confirmada", "true");
        setStatus("success");
        setNombre(""); 
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  // DISEÑO URBANO PARA LA CONFIRMACIÓN EXITOSA (Adiós al cuadro blanco/verde)
  if (status === "success") {
    return (
      <div className="text-center p-6 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md w-full my-2">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black mb-3 text-lg font-bold">
          ✓
        </div>
        <p className="text-white font-black text-lg uppercase tracking-wider">
          ¡Tu lugar está reservado!
        </p>
        <p className="text-xs text-neutral-400 mt-2 tracking-wide leading-relaxed">
          Ya estás en la lista de invitados.<br />¡Nos vemos en la fiesta!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <div className="text-center mb-1">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">Confirma tu asistencia</h2>
      </div>

      <input
        type="text"
        placeholder="Nombre y Apellido"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        disabled={status === "loading"}
        required
        className="border border-white/10 p-3 rounded-xl text-base focus:outline-none focus:ring-1 focus:ring-white text-white bg-white/5 placeholder-neutral-500 backdrop-blur-sm transition-all text-center"
      />

      <button 
        type="submit" 
        disabled={status === "loading"}
        className="bg-white text-black p-3 rounded-xl font-black uppercase tracking-widest hover:bg-neutral-200 transition-all disabled:bg-neutral-700 text-xs active:scale-[0.98]"
      >
        {status === "loading" ? "Confirmando..." : "Confirmar Invitación"}
      </button>
      
      {status === "error" && (
        <p className="text-red-400 text-xs text-center font-bold uppercase tracking-wider mt-1">Hubo un problema, intentá de nuevo.</p>
      )}
    </form>
  );
}