import Header from "../components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search() {
  const router = useRouter();

  const { location, startDate, endDate, guest } = router.query;

  const formatStarteDate = format(new Date(startDate), "dd MMMM yy");
  const formateEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = ` ${formatStarteDate} -  ${formateEndDate} `;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6 gap-2">
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
        </section>
      </main>
    </div>
  );
}

export default Search;
