"use client";
import React, { useRef, useState } from "react";

const LogoUploader = ({ onChange }) => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : "");
        if (onChange) onChange(e);
    };

    return (
        <div className="mt-4">
            <label className="mr-2">Agregar logo: </label>
            <button
                type="button"
                onClick={handleButtonClick}
                style={{
                    backgroundColor: "#f3f4f6",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    color: 'black',
                    cursor: 'pointer'
                }}
            >
                {fileName || "Seleccionar archivo"}
            </button>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleChange}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default LogoUploader;
