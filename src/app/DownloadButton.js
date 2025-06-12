'use client';
import React from 'react';

const DownloadButton = ({ qrRef }) => {
  const handleDownload = async () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qr-code.png';
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Descargar QR
    </button>
  );
};

export default DownloadButton;
