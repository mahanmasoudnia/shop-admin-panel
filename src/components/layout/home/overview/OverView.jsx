import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import Avatar1 from "../../../../assets/img/Avatar1.png";
import Avatar2 from "../../../../assets/img/Avatar2.png";
import Avatar3 from "../../../../assets/img/avatar3.png";
import Card from "../../../common/Card/Card";
const OverView = () => {
  const customers = [
    { url: Avatar1, fullName: "امیر امیری" },
    { url: Avatar2, fullName: "امیر امیری" },
    { url: Avatar3, fullName: "امیر امیری" },
  ];
  return (
    <Card className="p-[3.2rem] bg-white">
      <h2 className="text-[1.8rem] font-semibold w-fit pb-[1.6rem]">آمار امروز</h2>

      <Card className="bg-light-Gray p-[0.8rem] text-[3.2rem] flex flex-row h-fit">
        <Card className=" bg-light-Gray w-1/2  flex p-[0.8rem] items-start gap-[1.6rem] flex-row h-fit">
          <FiShoppingBag className="p-[1rem] text-[3.2rem] rounded-full bg-[#B1E5FC]" />
          <div className="font-medium flex flex-col items-start">
            <span className="text-[1.1rem] max-sm:text-[0.7rem] text-Gray ">سفارش دهندگان</span>
            <h1 className="text-[4.2rem] max-sm:text-[2rem]">1024</h1>
          </div>
        </Card>
        <Card className=" w-1/2 bg-white shadow-md flex p-[0.8rem] items-start gap-[1.6rem] flex-row h-fit ">
          <FiShoppingBag className="p-[1rem] text-[3.2rem] rounded-full bg-[#B1E5FC]" />
          <div className="font-medium flex flex-col items-start">
            <span className="text-[1.1rem] max-sm:text-[0.7rem] text-Gray ">سفارش دهندگان</span>
            <p className="text-[4.2rem] max-sm:text-[2rem]">1024</p>
          </div>
        </Card>
      </Card>
      <div>
        <p className="text-Gray text-[1.2rem] text-start  py-[2rem]">3 کاربر جدید داریم</p>
        <div className="flex gap-[6rem] max-md:gap-12 justify-between md:px-[3.2rem]">
          {customers?.map((x) => (
            <div className="font-semibold text-[1.2rem] flex flex-col items-center">
              <img className="w-[6.4rem] h-[6.4rem] mb-[1.2rem] rounded-full flex item-center " src={x.url} />
              <span> {x.fullName} </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default OverView;
