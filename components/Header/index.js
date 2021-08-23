import Image from "next/image";
import { BiGlobe, BiMenu, BiSearch, BiUserCircle } from "react-icons/bi";
function Header() {
  return (
    <header className="h-[80px]  sticky bg-white shadow-md py-4 z-50 top-0 md:px-10 px-[8.5px] grid grid-cols-3">
      {/* logo */}
      <div className="relative flex items-center cursor-pointer ">
        <Image
          src="/images/airbnb-l.png"
          width={45}
          height={35}
          objectFit="contain"
        />
        <h3 className=" mx-0.5 font-extrabold text-red-500 font-sans text-lg ">
          airbnb
        </h3>
      </div>
      {/* search section */}
      <div className="flex px-2  items-center md:border-[0.5px] shadow-md min-w-min border-black/70 rounded-full hover:scale-105 transition duration-200">
        <input
          type="text"
          className=" outline-none flex-1 bg-transparent text-xs md:text-base ml-2"
          placeholder="Start your search"
        />
        <p className="hidden ml-2 bg-red-500 p-2 rounded-full cursor-pointer md:inline-flex">
          <BiSearch className="text-white" />
        </p>
      </div>

      <div className=" flex items-center mx-2 justify-end">
        <p className="hidden rounded-full md:inline ml-6 hover:shadow-md hover:bg-white/70 px-4 cursor-pointer">
          Become a host
        </p>
        <p className="hover:border hover:shadow-md hover:scale-200 px-4 cursor-pointer rounded-full hidden md:inline-flex">
          <BiGlobe className="h-6 animate-spin " />
        </p>
        <div className=" flex items-center border p-3  rounded-full h-7 hover:border hover:shadow-md hover:scale-200 ">
          <BiMenu className=" cursor-pointer " />
          <BiUserCircle className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
