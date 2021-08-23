import Image from "next/image";

function SmallCard({ img, distance, location }) {
  return (
    <section className=" flex items-center m-2 space-x-4 rounded-xl hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out cursor-pointer py-2">
      <div className="relative h-16 w-16 mx-2">
        <Image src={img} alt="" layout="fill" className="rounded-lg " />
      </div>
      <div>
        <h2 className="font-bold">{location}</h2>
        <h2>{distance}</h2>
      </div>
    </section>
  );
}

export default SmallCard;
