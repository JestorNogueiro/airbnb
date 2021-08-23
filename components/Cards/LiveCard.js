import Image from "next/image";
function LiveCard({ img, title }) {
  return (
    <div className=" cursor-pointer mx-3 mt-5 hover:scale-105 transform transition duration-500 ease-out hover:shadow-xl p-2 rounded-lg hover:border-[0.4px]">
      <div className="relative h-80 w-80 flex rounded-lg  ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h2 className="text-2xl mt-2 mr-2 font-semibold">{title}</h2>
    </div>
  );
}

export default LiveCard;
