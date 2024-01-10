import React, { useState } from 'react'
import Card from '../Card/Card';
import Badge from '../badge/Badge';
import SubmitButton from '../Button/Button';
import { addItem } from '../../../pages/Basket/basketSlice';
import { useDispatch } from 'react-redux';
import { useAction } from '../../../context/Action';

const TableMobile = ({data}) => {
    const {edit, setEdit,deleteId, setDeleteId}=useAction()

    const dispatch = useDispatch();
  return (
   <>
     {data?.map((x) => (
            <Card className="md:hidden card bg-white w-96 shadow-xl flex flex-row mb-10 w-auto">
              {x.imgLink && <img src={x.imgLink} className="h-auto w-inherit" alt="Shoes" />}

              <div className="card-body">
                <h2 className="card-title text-start">
                  {x.name}
                  <Badge className={`${x.activity === "موجود" ? " badge-success" : "badge-error"} p-3 text-[1rem]`}>
                    {x.activity}
                  </Badge>{" "}
                </h2>
                <p className="text-start text-base">{x.specifications}</p>
                <div className="flex items-start mt-5 justify-between">
                  <SubmitButton
                    onClick={() => {
                      dispatch(addItem(x));
                    }}
                    className="h-1 text-base py-0 px-5 bg-Primary"
                  >
                    اضافه
                  </SubmitButton>
                  <SubmitButton
                    onClick={() => {
                      setEdit(x);
                      document.getElementById("my_modal_7 edit").showModal();
                    }}
                    className="h-1 text-base py-0 px-5 bg-gray-500 hover:bg-gray-600"
                  >
                    ویرایش
                  </SubmitButton>
                  <SubmitButton
                    onClick={() => {
                      setDeleteId(x.id);
                      document.getElementById("my_modal_7 delete").showModal();
                    }}
                    className="h-1 text-base py-0 px-5 bg-red-600 hover:bg-red-700"
                  >
                    حذف
                  </SubmitButton>
                </div>
              </div>
            </Card>
          ))}
   </>
  )
}

export default TableMobile