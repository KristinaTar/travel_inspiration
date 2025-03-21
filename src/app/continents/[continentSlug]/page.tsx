type Params= {
  continentSlug: string;
}

export default async function ContinentsDetails({ params }: { params: Params }) {

  const continentSlug = params.continentSlug;

  return (
    <div className="pt-[50px] pl-[50px]">
      <div className="text-black pb-[50px]">{continentSlug.toUpperCase()} </div>
    </div>
  );
}