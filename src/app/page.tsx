import Link from "next/link";
import Image from "next/image";
import heroImg from "../../public/images/cover_girl2.png";
import gql from "graphql-tag";
import client from "@/lib/apollo-client";

const GET_CONTINENTS = gql`
{
  continents {
    name
  }
}
`;
export default async function Home() {
  const { data } = await client.query({ query: GET_CONTINENTS });


  return (
    <div>
      <Image src={heroImg} alt="coverGirl" className="w-full sm:min-h-80"/>

      <div className=" sm:gap-80 sm:pl-[100px] ">
        <div className=" sm:pt-20">
          <div className="text-green-primary font-knewave text-lg min-w-[300px]">Coutries to visit</div>
          <div className="text-grey-primary font-bold min-w-[300px]">Hidden Gems Around the World</div>
          <div className="text-grey-primary font-semibold min-w-[300px]">Read and explore more new destinations</div>
        </div>
        <div>
          <h1 className="text-black">🌍 Explore continents</h1>
          <ol className=" text-black list-decimal list-inside">
            {data.continents.map((continent: {name: string}) => (
              <li key={continent.name}>
                <Link  href={`/continents/${continent.name}`}>{continent.name}</Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
