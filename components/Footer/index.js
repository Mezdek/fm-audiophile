import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Products" },
  { href: "/", label: "Contact" },
];
const socialLinks = [
  { href: "/", label: "Facebook", ico: "/assets/icons/facebook.webp" },
  { href: "/", label: "Twitter", ico: "/assets/icons/twitter.webp" },
  { href: "/", label: "Instagram", ico: "/assets/icons/instagram.webp" },
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
          {socialLinks.map((link, id) => (
            <a key={id} href={link.href} className={style.social_links}>
              <Image
                src={link.ico}
                alt={link.label}
                layout="fill"
                objectFit="contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
