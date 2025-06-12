"use client";
import { useRef, useEffect, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import DownloadButton from './DownloadButton';
import QRSizeSelector from './QRSizeSelector';
import LogoUploader from './LogoUploader';
import UrlInput from './UrlInput';
import QRPreview from './QRPreview';
import QRBodyPatternSelector from './QRBodyPatternSelector';
import QRColorSelector from './QRColorSelector';
import QREyeOuterPatternSelector from './QREyeOuterPatternSelector';
import QREyeInnerPatternSelector from './QREyeInnerPatternSelector';

const QRGenerator = () => {
  const qrRef = useRef(null);
  const [url, setUrl] = useState('https://example.com');
  const [logo, setLogo] = useState(null);
  const [size, setSize] = useState(300);
  const [pattern, setPattern] = useState('rounded');
  const [color, setColor] = useState('#000000');
  const [mounted, setMounted] = useState(false);

  const [outerEye, setOuterEye] = useState('square');
  const [outerEyeColor, setOuterEyeColor] = useState('#000000');
  const [innerEye, setInnerEye] = useState('square');
  const [innerEyeColor, setInnerEyeColor] = useState('#000000');

  const qrCode = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    qrCode.current = new QRCodeStyling({
      width: size,
      height: size,
      type: 'canvas',
      data: url,
      image: logo,
      dotsOptions: {
        color: color,
        type: pattern,
      },
      backgroundOptions: {
        color: '#ffffff',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 10,
      },
      cornersSquareOptions: {
        type: outerEye,
        color: outerEyeColor,
      },
      cornersDotOptions: {
        type: innerEye,
        color: innerEyeColor,
      },
    });

    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.current.append(qrRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !qrCode.current) return;
    qrCode.current.update({
      width: size,
      height: size,
      data: url,
      image: logo,
      dotsOptions: {
        color: color,
        type: pattern,
      },
      cornersSquareOptions: {
        type: outerEye,
        color: outerEyeColor,
      },
      cornersDotOptions: {
        type: innerEye,
        color: innerEyeColor,
      },
    });

    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.current.append(qrRef.current);
    }
  }, [url, logo, size, pattern, color, outerEye, outerEyeColor, innerEye, innerEyeColor, mounted]);

  const handleLogoChange = (e) => {
    if (!mounted) return;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-row gap-12 items-start justify-center w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-start w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-4">Generador de Código QR</h2>
        <UrlInput url={url} setUrl={setUrl} />
        <LogoUploader onChange={handleLogoChange} />
        <QRSizeSelector size={size} setSize={setSize} />
        <QRBodyPatternSelector pattern={pattern} setPattern={setPattern} />
        <QRColorSelector color={color} setColor={setColor} />
        <QREyeOuterPatternSelector
          outerEye={outerEye}
          setOuterEye={setOuterEye}
          outerEyeColor={outerEyeColor}
          setOuterEyeColor={setOuterEyeColor}
        />
        <QREyeInnerPatternSelector
          innerEye={innerEye}
          setInnerEye={setInnerEye}
          innerEyeColor={innerEyeColor}
          setInnerEyeColor={setInnerEyeColor}
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-md">
        {mounted && <QRPreview qrRef={qrRef} size={size} />}
        <DownloadButton qrRef={qrRef} />
      </div>
    </div>
  );
};

export default QRGenerator;