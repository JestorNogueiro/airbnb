import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
function Search({ img, title, location, description, star, price, total }) {
  return (
    <div className="md:flex  py-7 px-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t rounded-xl">
      <div className=" relative h-48 max-w-[400px] min-w-[320px]  md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <p className=" absolute flex items-end justify-end mx-auto w-[100%]  pr-3">
          <BiHeart className="cursor-pointer mt-2 h-[30px] w-[30px] font-bold text-[#f35442] animate-pulse md:hidden" />
        </p>
      </div>
      <div className="flex flex-col ml-3 flex-grow ">
        <div className="flex justify-between">
          <p className="mt-2">{location}</p>
          <BiHeart className="cursor-pointer hidden md:inline text-[#f35442] animate-pulse h-[30px] w-[30px]" />
        </div>
        <h2 className=" md:text-xl text-lg">{title}</h2>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-1 md:pt-5">
          <p className="flex items-center font-semibold">
            <BsStar className="text-red-400 mr-2" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-bold">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
