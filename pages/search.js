import Header from "../components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import SearchItem from "../components/SearchItem";
import Map from "../components/Map";

function Search({ searchResult }) {
  // console.log(searchResult);
  const router = useRouter();

  const { location, startDate, endDate, guest } = router.query;

  const formatStarteDate = format(new Date(startDate), "dd MMMM yy");
  const formateEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = ` ${formatStarteDate} -  ${formateEndDate} `;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guest} guests`} />
      <main className="flex flex-col lg:flex-row">
        <section className="flex-grow pt-14 px-3 md:px-6 gap-2">
          <p className="text-xs flex">
            300+ Stays - <p className="font-bold"> {range}</p> - for (
            <p className="font-bold"> {guest} </p> ) - no of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden md:inline-flex space-x-3 mx-3 mb-3 text-gray-500 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Instant Book</p>
            <p className="button">More filter</p>
          </div>

          <section className="flex flex-col">
            {searchResult?.map((item) => (
              <SearchItem
                key={item.title}
                img={item.img}
                title={item.title}
                location={item.location}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </section>
        </section>

        <section className="items-center w-[300px] p-2 lg:inline lg:min-w-[300px] xl:min-w-[600px]">
          <Map searchResult={searchResult} />
        </section>
      </main>
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
