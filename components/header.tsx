import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      {/* <nav style={{flex:1, justifyContent: 'space-around', backgroundColor:'pink'}} className="py-8">
        <ul className="container flex gap-10">
          <li>
            <Link href={"/"}>Accueil </Link>
          </li>
          <li>
            <Link href={"/mariages"}>Mariages</Link>
          </li>
          <li>
            <Link href={"/anniversaires"}>anniversaires</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
