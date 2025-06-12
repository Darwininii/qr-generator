"use client";
import React from "react";

const QRColorSelector = ({ color, setColor }) => (
  <div className="mt-4 flex items-center gap-2">
    <label className="mr-2">Selecciona el Color para el Patrón:</label>
    <input
      type="color"
      value={color}
      onChange={e => setColor(e.target.value)}
      className="w-8 h-8 p-0 border-0"
    />
    <input
      type="text"
      value={color}
      onChange={e => setColor(e.target.value)}
      className="w-24 p-1 rounded bg-white text-black border"
    />
  </div>
);

export default QRColorSelector;