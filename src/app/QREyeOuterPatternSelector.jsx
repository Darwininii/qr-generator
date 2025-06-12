"use client";
import React from "react";

const outerEyePatterns = [
	{
		value: "square",
		label: "Cuadrado",
		svg: (
			<svg width="32" height="32">
				<rect
					x="4"
					y="4"
					width="24"
					height="24"
					stroke="black"
					fill="none"
					strokeWidth="4"
				/>
			</svg>
		),
	},
	{
		value: "rounded",
		label: "Redondeado",
		svg: (
			<svg width="32" height="32">
				<rect
					x="4"
					y="4"
					width="24"
					height="24"
					rx="8"
					stroke="black"
					fill="none"
					strokeWidth="4"
				/>
			</svg>
		),
	},
	{
		value: "extra-rounded",
		label: "Extra Redondeado",
		svg: (
			<svg width="32" height="32">
				<rect
					x="4"
					y="4"
					width="24"
					height="24"
					rx="12"
					stroke="black"
					fill="none"
					strokeWidth="4"
				/>
			</svg>
		),
	},
	{
		value: "dot",
		label: "Punto",
		svg: (
			<svg width="32" height="32">
				<circle
					cx="16"
					cy="16"
					r="8"
					stroke="black"
					fill="none"
					strokeWidth="4"
				/>
			</svg>
		),
	},
];

const QREyeOuterPatternSelector = ({
	outerEye,
	setOuterEye,
	outerEyeColor,
	setOuterEyeColor,
}) => (
	<div className="p-4 bg-white rounded shadow mb-4 max-w-xs sm:max-w-md w-full mx-auto">
		<div className="font-bold mb-2 text-black text-center">
			Patrón de ojos externos
		</div>
		<div className="qr-eye-row mb-2">
			{outerEyePatterns.map((p) => (
				<button
					key={p.value}
					type="button"
					className={`border rounded p-2 min-w-[48px] ${
						outerEye === p.value
							? "border-blue-500 bg-blue-100"
							: "border-gray-300 bg-white"
					}`}
					onClick={() => setOuterEye(p.value)}
				>
					{p.svg}
				</button>
			))}
		</div>
		<div className="flex items-center gap-2 mt-2">
			<span>Color:</span>
			<input
				type="color"
				value={outerEyeColor}
				onChange={(e) => setOuterEyeColor(e.target.value)}
				className="w-8 h-8 p-0 border-0"
			/>
			<input
				type="text"
				value={outerEyeColor}
				onChange={(e) => setOuterEyeColor(e.target.value)}
				className="w-24 p-1 rounded bg-white text-black border"
			/>
		</div>
	</div>
);

export default QREyeOuterPatternSelector;