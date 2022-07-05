import Link from "next/link";
import React from "react";
import style from "./style.module.css";
import CartIcon from "../Cart/CartIcon";

export default function Nav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/all", label: "Products" },
    { href: "/contact", label: "Contact" },
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
      <CartIcon />
    </div>
  );
}
