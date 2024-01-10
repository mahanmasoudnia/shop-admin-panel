import React from "react";

const Card = ({ children, ...props }) => {
  return <div className={`card  text-center rounded-[0.8rem] overflow-hidden ${props.className}`} >{children}</div>;
};

export default Card;
