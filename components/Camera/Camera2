import { useEffect, useRef, useState } from 'react';

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (isCameraOn) {
      const startCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (err) {
          console.error('Erreur d\'accès à la caméra :', err);
        }
      };
      startCamera();
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    }
  }, [isCameraOn]);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/png');
    setImageSrc(dataUrl);
  };

  return (
    <div>
      <button onClick={() => setIsCameraOn(!isCameraOn)}>
        {isCameraOn ? 'Éteindre la caméra' : 'Allumer la caméra'}
      </button>

      {isCameraOn && (
        <div>
          <video ref={videoRef} autoPlay playsInline style={{ width: '400px', height: '300px' }} />
          <button onClick={capturePhoto}>Prendre une photo</button>
          <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }}></canvas>
        </div>
      )}

      {imageSrc && (
        <div>
          <h3>Photo capturée :</h3>
          <img src={imageSrc} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default Camera;
