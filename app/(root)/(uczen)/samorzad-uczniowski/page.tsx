import Heading from "@/components/Heading";
import SamorzadTable from "@/components/ui-components/SamorzadTable";

function Page() {
  return (
    <div className="flex flex-col start justify-center gap-10 w-full">
      <Heading
        title="Samorząd Uczniowski"
        description="Uczniowie zaangażowani w ramach Samorządu Szkolnego."
      />
      <div>
        <h2 className="text-xl font-semibold">
          Skład samorządu na rok szkolny 2024/2025
        </h2>
        <ul className="list-disc list-inside mt-4">
          <li>Przewodniczący - Krystian Tomczyk 3E</li>
          <li>Zastępca - Katarzyna Szewc 2A</li>
          <li>Skarbnik - Wojciech Oros 2H</li>
          <li>Sekretarz - Jakub Ziętek 3G</li>
          <li>Członek - Jakub Cagara 2H</li>
          <li>Członek - Franciszek Konieczny 2G</li>
        </ul>
      </div>
      <SamorzadTable />
    </div>
  );
}

export default Page;
