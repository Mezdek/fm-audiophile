import React from "react";
import style from "./style.module.css";
import themes from "../../styles/themes.module.css";

export default function Button({ theme, role, title }) {
  return (
    <button
      className={`${style.button} ${themes[theme]}`}
      onClick={() => {
        typeof role === "function" && role(title);
      }}
    >
      {typeof role === "string" ? <a href={role}>{title}</a> : title}
    </button>
  );
}
