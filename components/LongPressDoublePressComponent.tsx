import { useState, useEffect } from 'react';

const LongPressDoublePressComponent = ({children}:any) => {
  const [clicks, setClicks] = useState(0);
  const [isLongPress, setIsLongPress] = useState(false);
  const longPressDuration = 500; // Milliseconds

  let timerId: any;

  const handleMouseDown = () => {
    timerId = setTimeout(() => {
      setIsLongPress(true);
      console.log('Long Press');
      alert('long press')
    }, longPressDuration);
  };

  const handleMouseUp = () => {
    clearTimeout(timerId);
    if (!isLongPress) {
      setClicks(prev => prev + 1);
    }
    setIsLongPress(false);
  };

  useEffect(() => {
    if (clicks === 2) {
      console.log('Double Press');
      setClicks(0);
    }

    const timeoutId = setTimeout(() => setClicks(0), 300); // Reset clicks after 300ms

    return () => clearTimeout(timeoutId);
  }, [clicks]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    //   style={{
    //     padding: '20px',
    //     backgroundColor: 'lightgray',
    //     textAlign: 'center',
    //   }}
    >
      {children}
    </div>
  );
};

export default LongPressDoublePressComponent;
