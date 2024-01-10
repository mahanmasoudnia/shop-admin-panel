import React from "react";
import Card from "./../../components/common/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import SubmitButton from "../../components/common/Button/Button";
import { deleteItem } from "./basketSlice";
import { Link } from "react-router-dom";

const Basket = () => {
  const basketItem = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();
  return (
    <>
      <Card className="py-[3.2rem] flex flex-col divide-y gap-8 px-[2.6rem] bg-white mb-[0.8rem] text-[1.6rem]">
        {basketItem.length > 0 ? (
          basketItem?.map((x) => (
            <div className="flex items-center gap-[1rem] pt-[3.6rem] max-md:flex-col center ">
              <img src={x.imgLink} className="rounded-[0.8rem]" />
              <h5 className="self-center w-1/2 py-[0.8rem] px-[1.2rem]">نام محصول: {x.name}</h5>
              <h5 className="self-center w-1/2 py-[0.8rem] px-[1.2rem]">قیمت: {x.price}</h5>
              <SubmitButton
                className="bg-red-600 hover:bg-red-700"
                onClick={() => {
                  dispatch(deleteItem(x.id));
                }}
              >
                حذف از سبد
              </SubmitButton>

              <hr />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-evenly">
            <h2 className="">موردی به سبد خرید اضافه نشده است</h2>
            <Link to="/products"> <SubmitButton className={"text-base "}>اضافه کردن</SubmitButton></Link>
          </div>
        )}
      </Card>
    </>
  );
};

export default Basket;
