const Lettre = () => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <div style={{ fontSize: 700, fontWeight: "900", color: "#FFFFFF" }}>
        <span
          style={{
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            left: "35%",
            top: "19%",
          }}
        >
          S
        </span>
        <span
          style={{
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            left: "52%",
            top: "40%",
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="icon-star"
          >
            <polygon points="50,15 61,39 88,39 66,57 73,85 50,69 27,85 34,57 12,39 39,39" />
          </svg>
          <style jsx>
            {`
              .icon-star {
                fill: #AB4CDD;
                stroke: black;
                stroke-width: 2;
                width: 650px;
                height: 650px;
              }
            `}
          </style>
          F
        </span>
      </div>
      {/* <div style={{fontSize: 100,fontWeight:'bold', color: '#FFFFFF', padding:0, margin:0 }}>
            F
        </div> */}
    </div>
  );
};

export default Lettre;
