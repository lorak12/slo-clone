import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";

function Page() {
  return (
    <div className="flex flex-col start justify-center gap-10 w-full">
      <Heading title="Komunikaty" description="Komunikaty szkolne." />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">
          Konto bankowe dla dobrowolnych składek na rzecz Rady Rodziców:
        </h2>
        <p className="text-muted-foreground">
          Nadsański Bank Spółdzielczy w Stalowej Woli
        </p>
        <div className="flex items-center gap-4">
          <code className="bg-slate-200 p-4 border dark:border-none rounded-lg w-fit flex items-center gap-2 dark:bg-background">
            20 9430 0006 0000 1153 2000 0001
            <Button
              className="bg-primary text-white dark:bg-backgroundGray"
              size="icon"
            >
              <Clipboard className="w-4 h-4" />
            </Button>
          </code>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Rada Rodziców</h2>
        <p className="text-muted-foreground">
          przy Samorządowym Liceum Ogólnokształcącym im. C. K. Norwida w
          Stalowej Woli
        </p>
        <p className="text-muted-foreground">ul. Wojska Polskiego 9</p>
        <p className="text-muted-foreground">NIP 865-21-44-255</p>
        <p className="text-muted-foreground">
          Przewodniczący Rady Rodziców - Robert Fila
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Dentysta dla uczniów SLO</h2>
        <p className="text-muted-foreground">
          Dentysta dla uczniów SLO przyjmuje w godzinach:
        </p>
        <ul className="list-disc list-inside">
          <li>Poniedziałek 12:00 - 18:00</li>
          <li>Wtorek 9:00 - 15:00</li>
          <li>Środa 9:00 - 15:00</li>
          <li>Czwartek 9:00 - 13:30</li>
        </ul>
        <p className="text-muted-foreground">
          Gabinet dentystyczny znajduje się na 2 piętrze w budynku PSP11.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Zwolnienia z religi i wdż</h2>
        <p className="text-muted-foreground w-1/2">
          Rodziców uczniów rezygnujących z uczestnictwa w lekcjach: religii i
          wychowania do życia w rodzinie, dyrektor Samorządowego Liceum
          Ogólnokształcącego im. Cypriana Kamila Norwida w Stalowej Woli
          informuje, że w celu zapewnienia bezpieczeństwa w czasie godziny
          wolnej, uczniowie są zobowiązani przebywać w czytelni szkolnej pod
          opieką pracownika szkoły, czekając na następną lekcję.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Półmetek</h2>
        <p className="text-muted-foreground w-1/2">
          Dyrektor pan Marek Czopor informuje, że szkoła nigdy nie organizowała
          i nie organizuje tzw. półmetków dla uczniów. Szkoła również nie bierze
          odpowiedzialności za żadną pozaszkolną formę tego typu wydarzeń.
        </p>
      </div>
    </div>
  );
}

export default Page;
