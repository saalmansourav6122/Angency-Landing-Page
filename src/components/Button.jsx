import React from "react";

function Button({ nameOfBtn, myStyle, href, target }) {
  return href ? (
    <a className={myStyle} href={href} target={target}>
      {nameOfBtn}
    </a>
  ) : (
    <button className={myStyle} target={target}>
      {nameOfBtn}
    </button>
  );
}

export default Button;
