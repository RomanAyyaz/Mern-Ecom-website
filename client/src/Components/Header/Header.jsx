import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
function Header() {
  // To show navbar menu in mobile phones
  const [shownavbar, setshownavbar] = useState(false);
  //User details
  const {User,UserCartlength} = useContext(UserContext);
  return (
    <>
      <nav className="hidden font-title max-w-full h-16 md:flex items-center justify-between">
        <div className="flex items-center lg:ml-14 lg:w-44 md:w-36 md:ml-1">
          <div className="lg:h-12 lg:w-12 lg:text-3xl md:h-10 md:w-10 md:text-xl flex justify-center items-center text-white bg-primary rounded-full">
            <FontAwesomeIcon icon={faStore} />
          </div>
          <h1 className="lg:ml-2 md:ml-1 font-bold lg:text-lg ">Trendy</h1>
          <h1 className="lg:ml-0.5 lg:text-lg">Trunk</h1>
        </div>
        <ul className="flex lg:font-medium items-center justify-between md:w-[500px] md:ml-2 lg:w-[700px]">
        <Link to = '/'>
          <li className="hover:text-primary cursor-pointer">Home</li>
          </Link>
          <Link to = '/men'>
          <li className="hover:text-primary cursor-pointer">Men</li>
          </Link>
          <Link to = '/women'>
          <li className="hover:text-primary cursor-pointer">Women</li>
          </Link>
          <Link to = '/baby'>
          <li className="hover:text-primary cursor-pointer">Baby Collection</li>
          </Link>
          <li className="hover:text-primary cursor-pointer">Pages</li>
          <li className="hover:text-primary cursor-pointer">Blog</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>
        <div className="relative md:text-xl lg:text-2xl text-black lg:h-10 lg:mr-14 lg:w-52 md:w-28 flex items-center md:justify-evenly lg:justify-around">
          <FontAwesomeIcon
            className="hover:text-primary"
            icon={faMagnifyingGlass}
          />
          {User ? (
            User.role === "admin" ? (
              <Link to={"/adminDashboard"}>
                <FontAwesomeIcon className="hover:text-primary" icon={faUser} />
              </Link>
            ) : User.role === "user" ? (
              <Link to={"/userDashboard"}>
                <FontAwesomeIcon className="hover:text-primary" icon={faUser} />
              </Link>
            ) : null
          ) : (
            <Link to={"/login"}>
              <FontAwesomeIcon className="hover:text-primary" icon={faUser} />
            </Link>
          )}
          <Link to='/cart'>
          <FontAwesomeIcon
            className="hover:text-primary"
            icon={faCartShopping}
          />
          </Link>
          <p className="absolute md:top-[-5px] md:left-[90px] lg:top-[-3px] lg:left-[180px] bg-primary text-white text-sm rounded-full md:h-[16px] md:w-[16px] lg:h-[18px] lg:w-[18px]">{UserCartlength}</p>
        </div>
      </nav>
      <div className="hidden m:w-full md:h-11  md:bg-black md:text-white  md:flex md:justify-center md:items-center">
        Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer
        <span className="ml-1 border-b-2 cursor-pointer  border-b-yellow-400">
          Shop Now
        </span>
      </div>
      {/* Navbar on mobile phones */}
      <nav className=" bg-white w-full h-14 md:hidden fixed z-50">
        <div className="mt-1.5 flex items-center ml-3 w-full">
          <div className="h-12 w-12 text-3xl flex justify-center items-center text-white bg-primary rounded-full">
            <FontAwesomeIcon icon={faStore} />
          </div>
          <h1 className="ml-2 font-bold text-xl ">Trendy</h1>
          <h1 className="ml-0.5 text-xl">Trunk</h1>
          <div className="ml-36 w-20 px-1.5 text-[27px] flex justify-between items-center">
            <Link to={"/login"}>
              <FontAwesomeIcon className="hover:text-primary" icon={faUser} />
            </Link>
            <Link to = '/cart'>
            <FontAwesomeIcon
              className="hover:text-primary"
              icon={faCartShopping}
            />
              </Link>
          </div>
        </div>
        <div
          onClick={() => {
            setshownavbar(!shownavbar);
          }}
          className="max-w-full flex justify-end items-center h-12 bg-navMobile"
        >
          <FontAwesomeIcon icon={faBars} className="mr-4 fa-xl text-white" />
        </div>
        {shownavbar ? (
          <div className="bg-navMobile font-title font-medium max-w-full h-64 flex justify-start text-white">
            <ul className="text-start mx-3 flex gap-0.5 flex-col w-full">
              <Link to ='/'>
              <li className="p-1  hover:bg-neutral-500 rounded-lg w-full">
                Home
              </li>
              </Link>
              <Link to ='/men'>
              <li className="p-1  hover:bg-neutral-500 rounded-lg w-full">
                Men
              </li>
              </Link>
              <Link to ='/women'>
              <li className="p-1  hover:bg-neutral-500 rounded-lg w-full">
                Women
              </li>
              </Link>
              <Link to ='/baby'>
              <li className="p-1  hover:bg-neutral-500 rounded-lg w-full">
              Baby Collection
              </li>
              </Link>
              <li className="p-1  hover:bg-neutral-500 rounded-lg w-full">
                Pages
              </li>
              <li className="p-1  hover:bg-neutral-500 rounded-lg w-full">
                Blog
              </li>
              <li className="p-1  hover:bg-neutral-500 rounded-lg w-full">
                Contact
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Header;
