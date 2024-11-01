"use client";

import Lettre from "./lettre";
import SVG from "./svg";

function page() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        background: "transparent",
        // paddingBottom:10,
        // paddingTop:10
      }}
    >
      <div className="shiny-background">
        <Lettre />
      </div>
      <style jsx>{`
        .shiny-background {
          background: linear-gradient(
            135deg,
            #fca4f0 25%,
            #0175ff 25%,
            #27caf7 50%,
            #0175ff 75%,
            #fca4f0 75%
          );
          background-size: 200% 200%;
          animation: shine 12s infinite linear;
          border-radius: 50%;
          width: 2000px;
          height: 2000px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        // @keyframes shine {
        //   10% {
        //     background-position: 0% 50%;
        //   }
        //   100% {
        //     background-position: 100% 50%;
        //   }
        // }
        // @keyframes shine {
        //   0% {
        //     background-position: 0% 50%;
        //   }
        //   100% {
        //     background-position: 100% 50%;
        //   }
        // }
      `}</style>
      <SVG />
    </div>
  );
}

export default page;
