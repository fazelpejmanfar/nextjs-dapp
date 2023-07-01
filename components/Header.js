import React from "react";
import Image from "next/image";
import { HeaderItems } from "../lib/HeaderIcons";
function Header() {
  return (
    <div className="w-full h-20 flex justify-between items-center p-5 absolute top-0 text-black">
      <div>
        <h1 className="text-2xl">Nextjs Dapp Boilerplate</h1>
      </div>

      <div className="flex justify-center items-center gap-5">
        {HeaderItems.map((item, id) => {
          return (
            <a
              key={id}
              className="social"
              href={item.target}
              target={"_blank"}
              rel="noreferrer"
            >
              {item.img}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
