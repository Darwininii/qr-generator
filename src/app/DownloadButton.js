'use client';
import React from 'react';

const DownloadButton = ({ qrRef, url }) => {
  const handleDownload = async () => {
    const canvas = qrRef.current.querySelector('canvas');
    if (!canvas) return;

    const downloadUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'qr-code.png';
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!url || url.trim() === ''}
    >
      Descargar QR
    </button>
  );
};

export default DownloadButton;
