/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Products" },
  { href: "/", label: "Contact" },
];

export default function Footer() {
  return (
    <div className={style.main}>
      <div className={style.section}>
        <div className={style.logo}>audiophile</div>
        <div className={style.text}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </div>
        <div className={style.text}>Copyright 2021 All Rights Reserved</div>
      </div>
      <div className={style.section}>
        <div className={style.title}>
          <ul>
            {links.map((link, id) => (
              <li key={id}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.icons}>
          <img
            src='/assets/facebook.png'
            alt={"facebook"}
            width={"25px"}
            height={"25px"}
          />
          <img
            src='/assets/instagram.png'
            alt={"instagram"}
            width={"25px"}
            height={"25px"}
          />
          <img
            src='/assets/twitter.png'
            alt={"twitter"}
            width={"25px"}
            height={"25px"}
          />
        </div>
      </div>
    </div>
  );
}
