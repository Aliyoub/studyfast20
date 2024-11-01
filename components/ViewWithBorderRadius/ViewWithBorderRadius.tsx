import React, { useEffect, useState } from "react";
import type { PropsWithChildren, ComponentType } from "react";
import "./ViewWithBorderRadius.css"

type Props = PropsWithChildren<{
  title?: any;
  // topComponent?: ComponentType<{
  //   className?: string;
  // }>;
  topComponent?: any;
}>;



const ViewWithBorderRadius = ({ title, children, topComponent }: Props) => {
  // const myTopComponent = <div></div>

  return (
    <div>
      <div className="topView">
        <div className="topChildView">
          <div style= {{fontSize: 14, fontWeight: "bold", color: "#FFFFFF"}} >
            title
          </div>
          topComponent
        </div>
      </div>
      <div className="bottomView">
        <div className="bottomChildView">{children} </div>
      </div>
    </div>
  );
};

export default ViewWithBorderRadius;
