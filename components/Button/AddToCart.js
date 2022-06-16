import style from "./style.module.css";

export default function AddToCart({ theme }) {
  return (
    <div
      className={`${style.button} ${style[theme]}`}
      onClick={(e) => {
        console.log("clicked");
      }}
    >
      Add to Cart
    </div>
  );
}
