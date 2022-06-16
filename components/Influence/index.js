/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";

const story = {
  title: "Bringing you the best audio gear",
  image: "/assets/man.jpg",
  body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
};
export default function Influence() {
  return (
    <div className={style.main}>
      <div className={style.left}>
        <div className={style.title}>{story.title}</div>
        <div className={style.text}>{story.body}</div>
      </div>
      <div className={style.right}>
        <img className={style.image} src={story.image} alt={story.title} />
      </div>
    </div>
  );
}
