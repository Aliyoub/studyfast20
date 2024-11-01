const SVG = () => {
  return (
    <div className="circle-container">
        <svg
      className="circle"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pink-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FF99CC;stopOpacity:1" }} />
          <stop offset="100%" style={{ stopColor: "#3399FF;stopOpacity:1" }} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#pink-blue)" />
    </svg>
      <style jsx>
        {`
          .circle-container {
            width: 2000px;
            height: 2000px;
            display: flex;
            height: 100vh;
            width: 100%;
            align-items: center;
            justify-content: center;
            flex-direction: column
          }

          svg.circle {
            width: 99%;
            height: 99%;
          }
        `}
      </style>
    </div>
  );
};

export default SVG;
