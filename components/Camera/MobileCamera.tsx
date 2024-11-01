import { useEffect, useRef, useState } from 'react';

const MobileCamera = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
//   const [isCameraOn, setIsCameraOn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');


  const videoRef = useRef<HTMLVideoElement | null>(null); // Explicitly define the ref type
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    const startCamera = async () => {
      if (isCameraOn) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: 'environment' }, // For rear camera, use 'user' for front camera
            },
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error: any) {
          setErrorMessage('Error accessing camera: ' + error.message);
        }
      } else {
        if (videoRef.current && videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject as MediaStream;
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };

    startCamera();
  }, [isCameraOn]);

  return (
    <div>
      <button onClick={() => setIsCameraOn(!isCameraOn)}>
        {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera!'}
      </button>

      {isCameraOn && (
        <div>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      )}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default MobileCamera;
