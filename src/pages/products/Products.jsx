import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Table from "../../components/common/table/Table";
import { SlPencil, SlPlus, SlTrash } from "react-icons/sl";
import Badge from "../../components/common/badge/Badge";
import { useDispatch, useSelector } from "react-redux";
import { dataAsync } from "./productsDataSlice";
import { addItem } from "../Basket/basketSlice";
import Delete from "./../../components/layout/products/actions/DeleteAction/Delete";
import EditProd from "./../../components/layout/products/actions/editAction/EditProd";
import Card from "./../../components/common/Card/Card";
import SubmitButton from "../../components/common/Button/Button";
import TableMobile from "../../components/common/table/TableMobile";
import { useAction } from "../../context/Action";

const Products = () => {

  const {edit, setEdit,deleteId, setDeleteId}=useAction()
  const { productsData } = useSelector((state) => state.productsData);
  const dispatch = useDispatch();

  const columns = useMemo(
    () => [
      {
        header: "نام محصول",
        accessorKey: "name",
        //cell.row.original
        cell: (cell) => (
          <>
            <div className="flex items-center gap-[1rem] font-semibold text-[1.5rem] ">
              <img src={cell?.row?.original?.imgLink} className="rounded-[0.8rem]" />
              <div className="w-full">
                <h5 className="self-start w-1/2 text-start pb-[0.5rem] ">{cell?.row?.original?.name}</h5>
                <p className="line-clamp-2 text-[1.2rem] opacity-50 break-words"> {cell?.row?.original?.specifications[1]} </p>
              </div>
            </div>
          </>
        ),
      },

      {
        header: "برند",
        accessorKey: "brand",
      },
      {
        header: "قیمت",
        accessorKey: "price",
      },
      {
        header: "وضعیت",
        accessorKey: "activity",
        cell: (cell) => (
          <Badge className={`${cell?.row?.original?.activity === "موجود" ? " badge-success" : "badge-error"} p-5 `}>
            {cell?.row?.original?.activity}
          </Badge>
        ),
      },

      {
        header: "Action",
        cell: ({ row }) => (
          <>
            <div className={``}>
              <button
                onClick={() => {
                  setEdit(row.original);
                  document.getElementById("my_modal_7 edit").showModal();
                }}
                className={`hover:bg-gray-100 text-2xl focus:ring-4 focus:outline-none focus:ring-gray-200  transition-all font-medium `}
              >
                <SlPencil className="text-[1.7rem]" />
              </button>

              <button
                onClick={() => {
                  setDeleteId(row.original.id);

                  document.getElementById("my_modal_7 delete").showModal();
                }}
                className={` hover:bg-gray-100 text-2xl focus:ring-4 text-red-600 focus:outline-none transition-all focus:ring-gray-200 font-medium ms-3`}
              >
                <SlTrash className="text-[1.7rem]" />
              </button>
              <button
                onClick={() => {
                  dispatch(addItem(row.original));
                }}
                className={` hover:bg-gray-100 text-2xl focus:ring-4 text-Primary focus:outline-none transition-all focus:ring-gray-200 font-medium ms-3`}
              >
                <SlPlus className="text-[1.7rem]" />
              </button>
            </div>
          </>
        ),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  return (
    <>
      {<Delete id={deleteId} />}
      {<EditProd prod={edit} />}
      {productsData && (
        <>
          <Table className="max-md:hidden mb-24" data={productsData} columns={columns} />
         <TableMobile data={productsData}/>
        </>
      )}
    </>
  );
};

export default Products;
