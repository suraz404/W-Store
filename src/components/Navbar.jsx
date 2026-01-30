import { Divide, MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ location, getlocation, openDropdown, setopenDropdown }) => {
  const handleopenDropdown = () => {
    setopenDropdown(!openDropdown);
  };
  const { cart = [] } = useContext(CartContext);

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className=" max-w-6xl mx-auto flex items-center justify-between ">
        {/* logo section  */}
        <div className="flex gap-7 items-center">
          <h1 className=" text-3xl font-medium font-serif">W-Store</h1>
          <div className="flex gap-1 items-center text-gray-500 text-sm">
            <MapPin className="text-black text-sm" />
            <span>
              {location ? (
                <div className="-space-y-1.5">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={handleopenDropdown} />
          </div>
          {openDropdown ? (
            <div className="w-62.5 h-max fixed shadow-2xl rounded-md top-16 left-60 z-50 bg-white border-2 p-5 border-gray-100 ">
              <h1 className="font-semibold text-xl mb-4 flex justify-between">
                Change Address
                <span>
                  <CgClose onClick={handleopenDropdown} />
                </span>{" "}
              </h1>
              <button
                className="px-3 border-2 border-gray-500 rounded-md hover:bg-black hover:text-white"
                onClick={getlocation}
              >
                Detect My Location
              </button>
            </div>
          ) : null}
        </div>
        {/* menu section */}
        <nav className="flex gap-6 items-center">
          <ul className="flex gap-7 items-center font-light">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-gray-600"
                    : "text-black"
                }`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-gray-600"
                    : "text-black"
                }`
              }
            >
              <li>Product</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-gray-600"
                    : "text-black"
                }`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-gray-600"
                    : "text-black"
                }`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className=" h-6 w-6" />
            <span className="bg-black  text-[10px] px-1 rounded-full text-white absolute -top-1 -right-2 ">
              {cart.length}
            </span>
          </Link>
          <SignedOut>
            <SignInButton className=" text-[14px] border-2 rounded-md px-1 cursor-pointer hover:bg-black hover:text-white font-light transition-all" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
