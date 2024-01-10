import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import { SlMagnifier, SlPlus } from "react-icons/sl";
// import EditPost from "./EditPost";
// import DeletePost from "./DeletePost";
// import SubmitButton from "../../Common/Button/Button";
// import AddPost from "./AddPost";

const ShareTable = ({ data, columns, ...props }) => {
  const rerender = React.useReducer(() => ({}), {})[1];

  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const [deleteId, setDeleteId] = useState(null);
  const [edit, setEdit] = useState({});

  useEffect(() => {
    console.log(deleteId);
  }, [deleteId]);

  const handleSorter = (e) => {
    setSorting(e);
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      sorting: sorting,
      globalFilter: globalFilter,
    },
    enableRowSelection: true,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: handleSorter,
    debugTable: true,
  });

  return (
    <div className={`p-[2.8rem] bg-white rounded-[1.2rem] ${props.className} `}>
   

      <div className="flex items-center justify-between pb-[1.6rem] ">
        <h2 className="">محصولات</h2>
        <div className="focus-within:border-2 bg-light-Gray justify-between w-[36rem] focus-within:border-black transition-all text-[1.4rem] flex  rounded-[1.2rem] items-center py-[0.8rem] px-[1.3rem]">
          <input value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} className="" placeholder="جستجو..." />
          <SlMagnifier className="text-[#b3b3b3]" />
        </div>
        {/* <SubmitButton
          onClick={() => {
            document.getElementById("my_modal_7 add").showModal();
          }}
        >
          <SlPlus className="mr-4" /> add new post
        </SubmitButton> */}
        {/* <AddPost /> */}
      </div>
      <div className="h-2" />
      <table className="table w-full bg-white text-[1.5rem] ">
        <thead className=" text-Gray h-[4.1rem]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    scope="col"
                    className="p-4 text-[1.5rem] font-medium"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <>

                        {flexRender(header.column.columnDef.header, header.getContext())}

                        {header.column.getIsSorted() === "asc" ? (
                          <span className="mx-1 text-black">⇧</span>
                        ) : header.column.getIsSorted() === "desc" ? (
                          <span className="mx-1 text-black">⇩</span>
                        ) : (
                          <div className="inline-flex items-center ml-2">⇧⇩</div>
                        )}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr className="bg-white border-b text-black hover:bg-gray-50" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td className="py-4" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button className="border rounded p-1" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          {"<<"}
        </button>
        <button className="border rounded p-1" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {"<"}
        </button>
        <button className="border rounded p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <br />
    </div>
  );
};

export default ShareTable;

function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type="checkbox" ref={ref} className={className + " cursor-pointer"} {...rest} />;
}
