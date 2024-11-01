"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faList,
  faHeadphones,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import "./BottomNavigation.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { categories } from "@/Texts copy";

const BottomNavigation = () => {
  const pathname: any = usePathname();
  const router: any = useRouter()

  return (
    <div className="bottom-navigation">
      <div
        style={{
          color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <FontAwesomeIcon icon={faHeadphones} />
        <Link
          style={{
            color: `${pathname === "/contenus" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          href="contenus"
        >
          Contenu
        </Link>
      </div>
      <div
        style={{
          color: `${pathname === "/infos" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <FontAwesomeIcon style={{ width: 15 }} icon={faCircleInfo} />
        <Link
          style={{
            color: `${pathname === "/infos" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          href="infos"
        >
          Infos
        </Link>
      </div>
      <div
        style={{
          color: `${pathname === "/settings" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <FontAwesomeIcon style={{ width: 15 }} icon={faCog} />
        <Link
          style={{
            color: `${pathname === "/settings" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          href="settings"
        >
          Paramètres
        </Link>
      </div>
      <div
        style={{
          color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
          fontSize: 11,
        }}
        className="nav-item"
      >
        <FontAwesomeIcon style={{ width: 15 }} icon={faList} />
        <span
          style={{
            color: `${pathname === "/categories" ? "#8B01F6" : "#fff"}`,
            fontSize: 11,
          }}
          // href="./categories"
          onClick={()=> router.push("/categories")}
        >
          Categories
        </span>
      </div>
    </div>
  );
};

export default BottomNavigation;
