"use client";
import React from "react";

const innerEyePatterns = [
  { value: "square", label: "Cuadrado", svg: <svg width="32" height="32"><rect x="10" y="10" width="12" height="12" stroke="black" fill="none" strokeWidth="4"/></svg> },
  { value: "rounded", label: "Redondeado", svg: <svg width="32" height="32"><rect x="10" y="10" width="12" height="12" rx="4" stroke="black" fill="none" strokeWidth="4"/></svg> },
  { value: "extra-rounded", label: "Extra Redondeado", svg: <svg width="32" height="32"><rect x="10" y="10" width="12" height="12" rx="6" stroke="black" fill="none" strokeWidth="4"/></svg> },
  { value: "dot", label: "Punto", svg: <svg width="32" height="32"><circle cx="16" cy="16" r="4" stroke="black" fill="none" strokeWidth="4"/></svg> },
];

const QREyeInnerPatternSelector = ({ innerEye, setInnerEye, innerEyeColor, setInnerEyeColor }) => (
  <div className="p-4 bg-white rounded shadow mb-4 max-w-xs sm:max-w-md w-full mx-auto">
    <div className="font-bold mb-2 text-black text-center">Patrón de ojos internos</div>
    <div className="qr-eye-row mb-2">
      {innerEyePatterns.map((p) => (
        <button
          key={p.value}
          type="button"
          className={`border rounded p-2 min-w-[48px] ${innerEye === p.value ? "border-blue-500 bg-blue-100" : "border-gray-300 bg-white"}`}
          onClick={() => setInnerEye(p.value)}
        >
          {p.svg}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-2 text-black">
      <span>Color:</span>
      <input
        type="color"
        value={innerEyeColor}
        onChange={e => setInnerEyeColor(e.target.value)}
        className="w-8 h-8 p-0 border-0"
      />
      <input
        type="text"
        value={innerEyeColor}
        onChange={e => setInnerEyeColor(e.target.value)}
        className="w-24 p-1 rounded bg-white text-black border"
      />
    </div>
  </div>
);

export default QREyeInnerPatternSelector;