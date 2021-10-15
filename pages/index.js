import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(false);

  if (menu) {
  } else {
  }

  return (
    <div className="container">
      <nav className="nav">
        <div className="nav__left">
          <div className="nav__logo">
            <Image src="/vercel.svg" width={150} height={50} />
          </div>
        </div>
        <div className="nav__right">
          <ul>
            <li>
              <a>Anime</a>
            </li>
            <li>
              <a>Manga</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
          </ul>
          <div
            className={`nav__mobile ${menu ? "open" : ""}`}
            onClick={() => setMenu(!menu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
}
