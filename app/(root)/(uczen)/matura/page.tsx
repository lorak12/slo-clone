import Heading from "@/components/Heading";

function Page() {
  return (
    <div className="flex flex-col start justify-center gap-10 w-full">
      <Heading
        title="Matura"
        description="Przydatne materiały do egzaminu maturalnego."
      />
      <div className="grid grid-cols-3 gap-2 p-8 border rounded-lg">
        <ul className="list-disc list-inside">
          <li>Matura próbna 2023 - Język Polski PP</li>
          <li>Matura próbna 2023 - Matematyka PP</li>
          <li>Matura próbna 2023 - Język Angielski PP</li>
          <li>Matura próbna 2023 - Język Polski PR</li>
          <li>Matura próbna 2023 - Matematyka PR</li>
          <li>Matura próbna 2023 - Język Angielski PR</li>
          <li>Matura próbna 2023 - Fizyka PR</li>
          <li>Matura próbna 2023 - Chemia PR</li>
          <li>Matura próbna 2023 - Biologia PR</li>
          <li>Matura próbna 2023 - Geografia PR</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
