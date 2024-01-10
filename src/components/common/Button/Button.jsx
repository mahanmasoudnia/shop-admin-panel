import React from "react";



const SubmitButton = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`btn bg-Primary hover:bg-Primary-hover uppercase text-white text-[1.6rem] font-medium content-center p-7 ${className}`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
