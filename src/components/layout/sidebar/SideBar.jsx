import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AiFillAppstore, AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import Logo from "../../../assets/img/Logo.png";
import Badge from "../../common/badge/Badge";
import { useSelector } from "react-redux";
import { SlMenu } from "react-icons/sl";

const SideBar = () => {
  const { pathname } = useLocation();
  const basketCount = useSelector((state) => state.basket.items.length);

  return (
    <>
      <aside className="bg-white w-[22.4%] overflow-hidden max-xl:w-[6rem] ">
        <img src={Logo} className="mb-[4.8rem] mt-[2.4rem] mr-[2rem] max-lg:w-12 max-lg:h-12" />

        {/* <div className={`lg:hidden  max-lg:mx-[1.2rem] max-lg:my-[2.6rem] btn btn-ghost btn-circles`}>
          <SlMenu className="ml-[2.1rem] text-[2.5rem]" />
        </div> */}
        <ul className="sidebar text-[1.5rem] text-Gray ">
          <Link to={"/"}>
            <li className={`${pathname === "/" ? "active" : ""} mx-[2.4rem]  max-lg:mx-[1.2rem]`}>
              <AiFillHome className="ml-[2.1rem] text-[2.5rem]" />
              داشبورد
            </li>
          </Link>
          <Link to={"/products"}>
            <li className={`${pathname === "/products" ? "active" : ""}  mx-[2.4rem]  max-lg:mx-[1.2rem]`}>
              <AiFillAppstore className="ml-[2.1rem] text-[2.5rem]" />
              محصولات
            </li>
          </Link>
          <Link to={"/card"}>
            <li className={`${pathname === "/card" ? "active" : ""}  relative mx-[2.4rem] max-lg:mx-[1.2rem]`}>
              {basketCount > 0 && (
                <Badge className="absolute bottom-[24px] right-[4px] badge-error badge-sm text-[0.9rem] rounded-badge p-3">
                  
                  {basketCount}
                </Badge>
              )}
              <AiOutlineShoppingCart className="ml-[2.1rem] text-[2.5rem]" />
              سبد خرید
            </li>
          </Link>

        </ul>
      </aside>
    </>
  );
};

export default SideBar;
