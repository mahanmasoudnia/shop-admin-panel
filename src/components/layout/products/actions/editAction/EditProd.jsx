import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Modal from "./../../../../common/Modal/Modal";
import SubmitButton from "./../../../../common/Button/Button";
import { updateProduct } from "../../../../../pages/products/productsDataSlice";

const EditProd = ({ prod }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: prod?.id || 0,
      name: prod?.name || "",
      brand: prod?.brand || "",
      price: prod?.price || "",
      activity: prod?.activity || "",
    },
  });

  const onSubmit = async(data) => {
   await dispatch(updateProduct(data));
    toast.success("عملیات ویرایش با موفقیت انجام شده!")
    document.getElementById("my_modal_7 edit").close();
  };

  useEffect(() => {
    setValue("id", prod?.id || 0);
    setValue("name", prod?.name || "");
    setValue("brand", prod?.brand || "");
    setValue("price", prod?.price || 0);
    setValue("activity", prod?.activity || "");
  }, [prod]);

  return (
    <>
      <Modal className="p-10 " id="edit">
        <h3 className="text-4xl font-bold mb-4 flex gap-3 items-center text-black">ویرایش</h3>
        <div className="modal-action">
          <form className="text-[1.6rem] w-full form-control gap-3 " onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label font-medium">
                <span className=" text-black">نام محصول</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input w-full input-bordered text-[1.6rem]"
                {...register("name", { required: "name is required" })}
              />
              {errors.name && <span className="text-red-600 text-xl">{errors.name.message}</span>}
            </div>
            <div>
              <label className="label font-medium">
                <span className=" text-black">برند</span>
              </label>
              <input
                type="text"
                placeholder="brand"
                className="input w-full input-bordered text-[1.6rem]"
                {...register("brand", { required: "brand is required" })}
              />
              {errors.brand && <span className="text-red-600 text-xl">{errors.brand.message}</span>}
            </div>
            <div>
              <label className="label font-medium">
                <span className=" text-black">قیمت</span>
              </label>
              <input
                type="text"
                placeholder="price"
                className="input w-full input-bordered text-[1.6rem]"
                {...register("price", { required: "price is required" })}
              />
              {errors.price && <span className="text-red-600 text-xl">{errors.price.message}</span>}
            </div>
            <div>
              <label className="label text-black font-medium">
                <span className="">وضعیت در انبار</span>
              </label>
              <select
                className=" select select-bordered min-w-full max-w-xs text-[1.6rem]"
                {...register("activity", { required: "Author is required" })}
              >
                <option disabled selected value={""}>
                  وضعیت
                </option>

                <option value={"موجود"}>موجود</option>
                <option value={"ناموجود"}>ناموجود</option>
              </select>
              <br />
              {errors.price && <span className="text-red-600 text-xl">{errors.price.message}</span>}
            </div>
            <SubmitButton type="submit" className=" mt-[3rem] rounded-full ">
              ثبت ویرایش
            </SubmitButton>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EditProd;
