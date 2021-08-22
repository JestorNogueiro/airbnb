import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] 2xl:h-[700px] top-0 ">
      <Image
        src="/images/hero.jpg"
        objectFit="cover"
        layout="fill"
        // width={100}
        // height={100}
      />
      <div className="absolute top-1/2 w-full text-center font-bold">
        <p>Not sure where to go?</p>
        <button className="text-purple-500 bg-white px-10 py-3 rounded-full shadow-md font-bold my-3 hover:shadow-lg active:scale-90 transition duration-180">
          I'm Flexible
        </button>
      </div>
    </section>
  );
}

export default Hero;
