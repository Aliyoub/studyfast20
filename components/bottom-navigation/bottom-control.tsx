"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faList,
  faHeadphones,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import "./BottomNavigation.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { controlState } from "../../store/slices/controlState/controlStateSlice";

const BottomControl = () => {
  const dispatch = useDispatch<AppDispatch>();
  const controlStateFromStore = useSelector((state: RootState) => state.controlState.value);

  // const [controlState, setControlState] = useState("");
  const pathname: any = usePathname();
  const router: any = useRouter();

  return (
    <div className="bottom-navigation">
      <div
        style={{
          color: `${controlStateFromStore === "play" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <PlayCircleFilledIcon style={{ width: 15 }} />
        {/* <FontAwesomeIcon icon={faHeadphones} /> */}
        <span
          style={{
            color: `${controlStateFromStore === "play" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            // setControlState("back");
            dispatch(controlState("play"));
            // router.push("/contenus");
          }}
        >
          Démarrer
        </span>
      </div>
      <div
        style={{
          color: `${controlStateFromStore === "pause" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <PauseCircleFilledIcon style={{ width: 15 }} />
        {/* <FontAwesomeIcon style={{ width: 15 }} icon={faCircleInfo} /> */}
        <span
          style={{
            color: `${controlStateFromStore === "pause" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            // setControlState("back");
            dispatch(controlState("pause"));
            // router.push("/contenus");
          }}
        >
          Pause
        </span>
      </div>
      <div
        style={{
          color: `${controlStateFromStore === "stop" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <StopCircleIcon
          style={{
            fontSize: 15,
            color: `${controlStateFromStore === "stop" ? "#8B01F6" : "#fff"}`,
          }}
        />
        {/* <FontAwesomeIcon style={{ width: 15 }} icon={faCog} /> */}
        <span
          style={{
            color: `${controlStateFromStore === "stop" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            // setControlState("back");
            dispatch(controlState("stop"));
            // router.push("/contenus");
          }}
        >
          Arrêter
        </span>
      </div>

      <div
        style={{
          color: `${controlStateFromStore === "back" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <ExitToAppIcon
          style={{
            fontSize: 15,
            color: `${controlStateFromStore === "back" ? "#8B01F6" : "#fff"}`,
          }}
        />
        <span
          style={{
            color: `${controlStateFromStore === "back" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            // setControlState("back");
            dispatch(controlState("back"));
            router.push("/home");
          }}
        >
          Retour
        </span>
      </div>
    </div>
  );
};

export default BottomControl;
