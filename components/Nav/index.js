import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import cartIcon from "../../public/assets/shopping-cart.png";
export default function Nav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/", label: "About" },
    { href: "/", label: "Products" },
    { href: "/", label: "Contact" },
  ];
  return (
    <div className={style.main}>
      <div className={style.logo}>LOGO</div>
      <ul>
        {links.map((link, id) => (
          <li key={id}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className={style.cart}>
        <Image src={cartIcon} alt={"cart"} />
      </div>
    </div>
  );
}
