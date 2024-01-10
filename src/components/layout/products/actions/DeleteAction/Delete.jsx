import React, { useEffect, useState } from "react";
import { SlTrash } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../../../../common/Modal/Modal";
import SubmitButton from "../../../../common/Button/Button";
import { deleteProduct } from "../../../../../pages/products/productsDataSlice";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    id !== null && dispatch(deleteProduct(id));
    toast.success("عملیات حذف با موفقیت انجام شده!", {
      position: "top-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
    });
    document.getElementById("my_modal_7 delete").close();
  };

  return (
    <Modal id="delete" className={`text-[1.6rem] md:min-w-[50rem] pt-12 pb-8 `}>
      <div className="text-black">
        <h3 className="text-4xl font-bold mb-8 flex gap-3 items-center">
          حذف محصول <SlTrash className="text-red-600" />
        </h3>
        <p className="font-medium">آیا از حذف مطمئن هستید؟</p>
      </div>
      <div>
        <div className="modal-action gap-8 ">
          <form method="dialog">
            <button className="btn text-[1.6rem] p-7 content-center">انصراف</button>
          </form>
          <SubmitButton className=" bg-red-600" onClick={handleDelete}>
            حذف
          </SubmitButton>
        </div>
      </div>
    </Modal>
  );
};

export default Delete;
