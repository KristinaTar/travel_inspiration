import { countriesData } from "@/db/mockkData";
import Link from "next/link";

type Params= {
  countrySlug: string;
}

export default async function CountryDetails({ params }: { params: Params }) {

  const countrySlug = params.countrySlug;

  function getCitiesByCountry(countrySlug: string) {
    const country = countriesData.find(item => item.country.toLowerCase() === countrySlug.toLowerCase());
    return country ? country.cities : [];
  }

  const citiesList = getCitiesByCountry(countrySlug.toLowerCase());

  return (
    <div className="pt-[50px] pl-[50px]">
      <div className="text-black pb-[50px]">{countrySlug.toUpperCase()}</div>
      {citiesList.map(city=> <Link key={city} className="text-black cursor-pointer flex flex-col pb-5" href={`/countries/${countrySlug}/${city}`}>{city}</Link>)}
    </div>
  );
}