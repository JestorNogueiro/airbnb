import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SmallCard from "../components/Cards/SmallCard";
import LiveCard from "../components/Cards/LiveCard";
import LargeCard from "../components/Cards/LargeCard";

export default function Home({ smallCardData, livecardData }) {
  // console.log(exploreData);
  return (
    <div className="">
      <Head>
        <title>Airbnb || Jestor</title>
        <link rel="icon" href="/images/airbnb-l.png" />
      </Head>

      <Header />
      <Hero />

      {/*  */}
      <main className="px-8 max-w-7xl mx-auto sm:px-16">
        <section className="pt-6">
          <h1 className="font-semibold text-4xl">Explore nearBy</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {smallCardData?.map((item) => (
              <SmallCard
                key={item.distance}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section className="my-4">
          <h2 className="text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide  p-3 -mx-3 ">
            {livecardData?.map((item) => (
              <LiveCard key={item.title} title={item.title} img={item.img} />
            ))}
          </div>
        </section>

        <LargeCard />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const smallCardData = await fetch(`https://jsonkeeper.com/b/4G1G`).then(
    (res) => res.json()
  );
  const livecardData = await fetch(`https://jsonkeeper.com/b/VHHT`).then(
    (res) => res.json()
  );

  return {
    props: {
      smallCardData,
      livecardData,
    },
  };
}
