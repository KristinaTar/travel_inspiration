import Link from "next/link";
import Image from "next/image";
import { countriesData } from "@/db/mockkData";
import heroImg from "../../public/images/cover_girl2.png";

export default function Home() {

  return (
    <div>
      <Image src={heroImg} alt="coverGirl" className="w-full sm:min-h-80"/>

      <div className="flex sm:gap-80 pt-12 pb-20 flex-col gap-5 sm:flex-row">
        <div className=" sm:pl-[100px] pl-[20px] sm:pt-20">
          <div className="text-green-primary font-knewave text-lg pb-[30px] min-w-[300px]">Coutries to visit</div>
          <div className="text-grey-primary font-bold min-w-[300px]">Hidden Gems Around the World</div>
          <div className="text-grey-primary font-semibold min-w-[300px]">Read and explore more new destinations</div>
        </div>
        <div className="flex sm:gap-10 justify-self-end gap-2">
          {countriesData.map((country) => (
            <Link key={country.id} className="rounded relative group" href={`/countries/${country.slug}`}>
              <Image src={country.coverImg} alt='country cover photo'
                     className="w-64 h-70 rounded cursor-pointer hover:opacity-20"/>
              <div
                className="absolute inset-0 bg-green-primary bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded">
                <span className="text-white text-sm font-semibold">{country.country}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
