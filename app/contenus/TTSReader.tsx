import { useState } from 'react';
import { contents } from './contents';


const TTSReader = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isReading, setIsReading] = useState(false);

  // Sample text broken into "lines"

  // Function to start reading
  const startReading = () => {
    const synth = window.speechSynthesis;
    const utterances = contents[0].split(',').map((line, index) => {
      const utterance = new SpeechSynthesisUtterance(line);

      // On speaking the current utterance, highlight the current line
      utterance.onstart = () => {
        setCurrentLine(index);
      };

      // Move to the next line after the current one is done
      utterance.onend = () => {
        if (index === contents[0].length - 1) {
          setIsReading(false); // Stop when last line is read
        }
      };

      return utterance;
    });

    // Read each line sequentially
    utterances.forEach(utterance => {
      synth.speak(utterance);
    });

    setIsReading(true);
  };

  // Function to stop reading
  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setIsReading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Text to Speech Reader</h1>
      <button onClick={startReading} style={{ marginRight: '10px', backgroundColor: 'red' }}>Start Reading</button>
      <button onClick={stopReading} style={{ marginRight: '10px', backgroundColor: 'red' }}>Stop Reading</button>
      <button onClick={pause} style={{ marginRight: '10px', backgroundColor: 'red' }}>Pause Reading</button>
      
      {/* Render each line with conditional highlighting */}
      <div style={{ marginBottom: '20px' }}>
        {contents[0].split(',').map((line, index) => (
          <p
            key={index}
            style={{
              fontSize: '18px',
              color: currentLine === index ? 'blue' : 'black',
              backgroundColor: currentLine === index ? 'lightyellow' : 'transparent'
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Control Buttons */}
      <div style={{display: "flex", width: "100%", height:"10px", backgroundColor: "red"}}>
        {!isReading ? (
          <button onClick={startReading} style={{ marginRight: '10px', backgroundColor: 'red' }}>Start Reading</button>
        ) : (
          <button onClick={stopReading} style={{ marginRight: '10px', backgroundColor: "red" }}>Stop Reading</button>
        )}
      </div>

    </div>
  );
};

export default TTSReader;
