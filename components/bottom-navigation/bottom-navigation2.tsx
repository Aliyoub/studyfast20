"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faList,
  faHeadphones,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import QuizIcon from '@mui/icons-material/Quiz';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HeadsetIcon from '@mui/icons-material/Headset';
import HomeIcon from '@mui/icons-material/Home';

import "./BottomNavigation.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { categories } from "@/Texts copy";
import { controlState } from "@/store/slices/controlState/controlStateSlice";

const BottomNavigation = () => {
  const dispatch = useDispatch<AppDispatch>();

  const pathname: any = usePathname();
  const router: any = useRouter()

  return (
    <div className="bottom-navigation">
            <div
        style={{
          color: `${pathname === "/home" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <HomeIcon style={{ width: 15 }} />
        {/* <FontAwesomeIcon icon={faHeadphones} /> */}
        <span
          style={{
            color: `${pathname === "/home" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            // setControlState("back");
            // dispatch(controlState("back"));
            router.push("/home");
          }}
        >
          Accueil
        </span>
      </div>
      <div
        style={{
          color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <HeadsetIcon style={{ width: 15 }} />
        {/* <FontAwesomeIcon icon={faHeadphones} /> */}
        <span
          style={{
            color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          onClick={() => {
            // setControlState("back");
            dispatch(controlState("contenus"));
          }}
        >
          Ecouter
        </span>
      </div>

      <div
        style={{
          color: `${pathname === "/infos" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <QuestionAnswerIcon style={{ width: 15 }} />
        {/* <FontAwesomeIcon style={{ width: 15 }} icon={faCircleInfo} /> */}
        <Link
          style={{
            color: `${pathname === "/infos" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          href="infos"
        >
          Question-Réponse
        </Link>
      </div>
      <div
        style={{
          color: `${pathname === "/settings" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <QuizIcon style={{ width: 15 }} />
        {/* <FontAwesomeIcon style={{ width: 15 }} icon={faCog} /> */}
        <Link
          style={{
            color: `${pathname === "/settings" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          href="settings"
        >
          Quiz
        </Link>
      </div>
      <div
        style={{
          color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <SupervisorAccountIcon style={{ fontSize: 15 }} />
        {/* <SupervisorAccountIcon style={{ fontSize: 20, color: 'blue' }} /> */}

        {/* <FontAwesomeIcon style={{ width: 15 }} icon={faList} /> */}
        <span
          style={{
            color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          // href="./categories"
          onClick={()=> router.push("/categories")}
        >
          Réviser en groupe
        </span>
      </div>
    </div>
  );
};

export default BottomNavigation;
