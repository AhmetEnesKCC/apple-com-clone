import { IoLogoApple } from "@react-icons/all-files/io/IoLogoApple";
import { IoIosSearch } from "@react-icons/all-files/io/IoIosSearch";
import { HiOutlineMenuAlt4 } from "@react-icons/all-files/hi/HiOutlineMenuAlt4";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";
import { BsBag } from "@react-icons/all-files/bs/BsBag";
import { useState } from "react";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchMode, setSearchMode] = useState(false);

  return (
    <div
      className={`header overflow-hidden   ${
        mobileMenu && "h-screen  bg-[rgba(0,0,0,1)]"
      } md:bg-[rgba(0,0,0,0.8)] transition-all md:h-12  duration-300 ease-in`}
    >
      <div className={`header-item-container hidden lg:flex `}>
        <IoLogoApple className="header-icon" />
        <p>Store</p>
        <p>Mac</p>
        <p>Ipad</p>
        <p>Iphone</p>
        <p>Watch</p>
        <p>TV</p>
        <p>Music</p>
        <p>Support</p>
        <IoIosSearch className="header-icon" />
        <BsBag className="header-icon" />
      </div>
      <div className="lg:hidden">
        <div
          className={`flex justify-between px-5 lg:hidden  text-gray-200 ${
            searchMode && "hidden"
          }`}
        >
          <HiOutlineMenuAlt4
            className={`${mobileMenu && "hidden"} header-icon `}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          />
          {mobileMenu && (
            <IoCloseOutline
              className="header-icon"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            />
          )}
          <IoLogoApple className="header-icon" />
          <IoIosSearch
            className={`header-icon transition-all duration-500 ${
              mobileMenu && "opacity-0 pointer-events-none"
            }`}
          />
        </div>
        <div
          className={`w-full transition-all duration-500  mt-10 ${
            searchMode && "mt-0"
          } flex space-x-4 px-4 items-center`}
        >
          <div className="flex-grow text-gray-400 py-2  flex items-center justify-between rounded-md bg-white  bg-opacity-10 backdrop-filter backdrop-blur-md  box-border outline-none">
            <IoIosSearch className="h-5 w-10 opacity-50" />
            <input
              onFocus={() => {
                setSearchMode(true);
              }}
              placeholder="Search apple.com"
              type="text"
              className=" transition-all w-full bg-transparent outline-none font-semibold placeholder-gray-400 placeholder-opacity-50"
            />
          </div>
          {searchMode && (
            <div
              onClick={() => {
                setSearchMode(false);
              }}
              className="text-apple-blue text-xl cursor-pointer"
            >
              Cancel
            </div>
          )}
        </div>
        <div
          className={`flex px-10 w-full text-gray-500 flex-col mt-4 space-y-4 ${
            !searchMode && "hidden"
          } `}
        >
          <hr className="w-screen -mx-10" />
          <div className="border-b-2 text-gray-300 border-gray-500 pb-2">
            Store
          </div>
          <div className="border-b-2 text-gray-300 border-gray-500 pb-2">
            Mac
          </div>
          <div className="border-b-2 text-gray-300 border-gray-500 pb-2">
            iPad
          </div>
          <div className="border-b-2 text-gray-300 border-gray-500 pb-2">
            iPhone
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
