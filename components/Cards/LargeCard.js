import Image from "next/image";
function LargeCard() {
  return (
    <section className="relative my-8 py-10  ">
      <div className="relative h-80 min-w-[300px]  py-16 ">
        <Image
          src={"/images/largecard.jpg"}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-xl "
        />
      </div>
      <div className="absolute left-12 top-28 ">
        <h2 className="font-semibold text-4xl w-64 mb-2 ">
          The Greatest Outdoors
        </h2>
        <h2>Wishlists curated by Airbnb.</h2>
        <button className="text-sm text-white bg-gray-800 px-4 py-2 rounded-lg mt-2 cursor-pointer hover:scale-105 transition duration-300">
          Get Inspired
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
