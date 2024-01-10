import React from "react";

const Badge = ({ children, ...props }) => {
  return <div className={`badge text-white text-[1.3rem] ${props.className}`}>{children}</div>;
};

export default Badge;
