import React from "react";

const Modal = ({ id, className, children }) => {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />

      <dialog id={`my_modal_7 ${id}`} className={`modal `}>
        <div className={`modal-box ${className}`}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
