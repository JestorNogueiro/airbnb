import Image from "next/image";
import { useState } from "react";
import {
  BiGlobe,
  BiMenu,
  BiSearch,
  BiUser,
  BiUserCircle,
} from "react-icons/bi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState(1);
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

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
      <div className="flex px-2  items-center md:border-[0.5px] shadow-md min-w-[150px] md:min-w-min border-black/70 rounded-full hover:scale-105 transition duration-200 mr-1">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className=" outline-none flex-1 bg-transparent text-xs md:text-base ml-2"
          placeholder="Start your search"
        />
        <p className="hidden ml-2 bg-red-500 p-2 rounded-full cursor-pointer md:inline-flex">
          <BiSearch className="text-white" />
        </p>
      </div>

      <div className=" flex items-center md:mx-2 justify-end">
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
      {searchInput && (
        <div className="flex flex-col items-center col-span-3 mx-auto bg-transparent h-full w-full backdrop-filter backdrop-blur rounded-xl">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex my-3 items-center m-auto border-b space-x-4 mb-3">
            <h2 className="text-2xl font-semibold flex-1 ">Number of Guests</h2>
            <p className="flex">
              <BiUser className="" style={{ height: "32px" }} />
              <input
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                min={1}
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </p>
          </div>
          <div className="my-3 p-3 justify-between">
            <button
              className="flex-grow text-gray-500 bg-white px-5 py3 mx-3 rounded-xl hover:scale-90 duration-100 transition transform ease-in hover:font-semibold "
              onClick={() => setSearchInput("")}
            >
              Cancle
            </button>
            <button className="flex-grow text-red-400 bg-white px-5 py3 mx-3 transition transform ease-in  hover:font-semibold  rounded-xl hover:scale-90 duration-100">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
