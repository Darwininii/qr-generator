"use client";
const QRPreview = ({ qrRef, size }) => (
  <div
    className="mt-4 flex justify-center items-center mx-auto border border-white rounded"
    style={{
      width: '300px',
      height: '300px',
      overflow: 'hidden',
      position: 'relative'
    }}
  >
    <div
      ref={qrRef}
      style={{
        transform: `scale(${300 / size})`,
        width: `${size}px`,
        height: `${size}px`
      }}
    />
  </div>
);

export default QRPreview;