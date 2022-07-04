import Link from "next/link";
import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import cartIcon from "../../public/assets/shopping-cart.png";
import { useSelector } from "react-redux";

export default function Nav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];
  const cart = useSelector((state) => state.cart);
  const cartCount = cart.reduce((sum, cur) => sum + cur.quantity, 0);

  return (
    <div className={style.main} style={{ "--cart_items": "bluuu" }}>
      <div className={style.logo}>LOGO</div>
      <ul>
        {links.map((link, id) => (
          <li key={id}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <a className={style.cart} href={"/cart"}>
        <span className={style.cart_count}>{cartCount}</span>
        <Image
          src={cartIcon}
          alt={"shopping cart"}
          layout="fill"
          objectFit="cover"
        />
      </a>
    </div>
  );
}
