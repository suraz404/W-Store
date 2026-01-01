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
import { useState } from "react";

const Navbar = ({ location }) => {
  const [openDropdown, setopencDropdown] = useState(false);
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
            <FaCaretDown />
          </div>
          {openDropdown ? <div> </div> : null}
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
              0
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
