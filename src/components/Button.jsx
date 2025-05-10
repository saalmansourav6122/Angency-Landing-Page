import React from "react";

function Button({ nameOfBtn, myStyle, href, target, svg }) {
  return href ? (
    <a className={myStyle} href={href} target={target}>
      {svg}
      {nameOfBtn}
    </a>
  ) : (
    <button className={myStyle} target={target}>
      {svg} {nameOfBtn}
    </button>
  );
}

export default Button;
