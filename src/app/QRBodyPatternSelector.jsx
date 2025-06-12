"use client";
import React from "react";

const patterns = [
  { value: "square", label: "Cuadrado" },
  { value: "dots", label: "Puntos" },
  { value: "rounded", label: "Redondeado" },
  { value: "classy", label: "Elegante" },
  { value: "classy-rounded", label: "Elegante Redondeado" },
  { value: "extra-rounded", label: "Extra Redondeado" },
];

const QRBodyPatternSelector = ({ pattern, setPattern }) => (
  <div className="mt-4">
    <label className="block mb-2 font-semibold">Patrón del cuerpo:</label>
    <div className="flex flex-wrap gap-2">
      {patterns.map((p) => (
        <button
          key={p.value}
          type="button"
          className={`border rounded p-2 ${pattern === p.value ? "border-blue-500 bg-blue-100 text-black" : "border-gray-300 bg-white text-black"}`}
          onClick={() => setPattern(p.value)}
        >
          {/* Aquí podrías poner un SVG representativo de cada patrón */}
          <span>{p.label}</span>
        </button>
      ))}
    </div>
  </div>
);

export default QRBodyPatternSelector;