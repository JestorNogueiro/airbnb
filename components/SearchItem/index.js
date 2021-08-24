import Image from "next/image";
import { BiHeart } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
function Search({ img, title, location, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-200 ease-out first:border-t rounded-xl">
      <div className=" relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col ml-3 flex-grow ">
        <div className="flex justify-between">
          <p>{location}</p>
          <BiHeart className="cursor-pointer" style={{ height: "35px" }} />
        </div>
        <h2 className="text-xl">{title}</h2>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
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
