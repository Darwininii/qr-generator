const QRSizeSelector = ({ size, setSize }) => {
  const options = [];
  for (let i = 200; i <= 2000; i += 100) {
    options.push(
      <option key={i} value={i}>{`${i}x${i}`}</option>
    );
  }

  return (
    <>
      <div className="mt-4"></div>
      <label className="mr-2">Tamaño del QR:</label>
      <select
        value={size}
        onChange={(e) => setSize(parseInt(e.target.value))}
        className="bg-white text-black p-2 rounded appearance-none"
      >
        {options}
      </select>
    </>
  );
};

export default QRSizeSelector;
