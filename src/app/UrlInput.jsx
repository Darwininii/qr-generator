"use client";
const UrlInput = ({ url, setUrl }) => (
  <input
    type="text"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    className="text-white p-2 w-full max-w-md bg-gray-800 rounded"
    placeholder="https://tusitio.com"
  />
);

export default UrlInput;