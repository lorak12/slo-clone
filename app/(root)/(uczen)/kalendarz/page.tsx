import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Page() {
  return (
    <div className="flex flex-col start justify-center gap-10 w-full">
      <Heading title="Kalendarz Roku Szkolnego 2024/2025" description="" />
      <div>
        <Button variant={"outline"}>Pobierz wersję PDF</Button>
      </div>
      <h2 className="text-xl font-semibold text-center">
        Kalendarz roku szkolnego 2024/2025
      </h2>

      <Table>
        <TableCaption className="caption-top text-left">2024</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>WYDARZENIE</TableHead>
            <TableHead>DATA</TableHead>
            <TableHead>DZIEŃ TYGODNIA</TableHead>
            <TableHead>PODSTAWA PRAWNA</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Rozpoczęcie zajęć dydaktyczno-wychowawczych</TableCell>
            <TableCell>4 września</TableCell>
            <TableCell>poniedziałek</TableCell>
            <TableCell>
              par. 2 ust.1 roz. MENiS z dn. 18 kwietnia 2002r.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rada pedagogiczna</TableCell>
            <TableCell>7 września</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Organizacyjne spotkanie z Rodzicami</TableCell>
            <TableCell>14 września</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Obchody Jubileuszu 25-lecia Szkoły</TableCell>
            <TableCell>22-23 września</TableCell>
            <TableCell>piątek, sobota</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rada pedagogiczna</TableCell>
            <TableCell>28 września</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Święto Edukacji Narodowej</TableCell>
            <TableCell>14 października</TableCell>
            <TableCell>sobota</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wszystkich Świętych</TableCell>
            <TableCell>1 listopada</TableCell>
            <TableCell>środa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Święto Niepodległości</TableCell>
            <TableCell>11 listopada</TableCell>
            <TableCell>sobota</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dyżur popołudniowy dla Rodziców</TableCell>
            <TableCell>16 listopada</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wystawienie zagrożeń ocenami niedostatecznymi za I semestr i
              poinformowanie rodziców
            </TableCell>
            <TableCell>do 22 grudnia</TableCell>
            <TableCell>piątek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Zimowa przerwa świąteczna</TableCell>
            <TableCell>23 - 31 grudnia</TableCell>
            <TableCell>jw.</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableCaption className="caption-top text-left">2025</TableCaption>
        <TableBody>
          <TableRow>
            <TableHead>WYDARZENIE</TableHead>
            <TableHead>DATA</TableHead>
            <TableHead>DZIEŃ TYGODNIA</TableHead>
            <TableHead>PODSTAWA PRAWNA</TableHead>
          </TableRow>
          <TableRow>
            <TableCell>Nowy Rok</TableCell>
            <TableCell>1 stycznia</TableCell>
            <TableCell>niedziela</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wystawienie propozycji ocen z wszystkich przedmiotów za I semestr
            </TableCell>
            <TableCell>do 12 stycznia</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wpisanie ocen semestralnych do dziennika</TableCell>
            <TableCell>do 19 stycznia</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Święto trzech Króli</TableCell>
            <TableCell>6 stycznia</TableCell>
            <TableCell>sobota</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rada klasyfikacyjna</TableCell>
            <TableCell>23 stycznia</TableCell>
            <TableCell>wtorek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wywiadówka</TableCell>
            <TableCell>25 stycznia</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ferie zimowe</TableCell>
            <TableCell>29 stycznia - 11 lutego</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rada podsumowująca I semester</TableCell>
            <TableCell>15 luty</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wystawienie zagrożeń ocenami niedostatecznymi w klasach
              maturalnych i poinformowanie rodziców
            </TableCell>
            <TableCell>do 20 marca</TableCell>
            <TableCell>środa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Dyżur popołudniowy dla Rodziców</TableCell>
            <TableCell>21 marca</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wiosenna przerwa świąteczna</TableCell>
            <TableCell>28 marca-2 kwietnia</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wystawienie propozycji ocen z wszystkich przedmiotów w klasach
              maturalnych
            </TableCell>
            <TableCell>do 12 kwietnia</TableCell>
            <TableCell>piątek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wpisanie ocen końcowych do dziennika w klasach maturalnych
            </TableCell>
            <TableCell>do 19 kwietnia</TableCell>
            <TableCell>piątek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>"Dzień otwarty szkoły"</TableCell>
            <TableCell>20 kwietnia</TableCell>
            <TableCell>sobota</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rada klasyfikacyjna klas maturalnych</TableCell>
            <TableCell>22 kwietnia</TableCell>
            <TableCell>poniedziałek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Zakończenie zajęć w klasach maturalnych</TableCell>
            <TableCell>26 kwietnia</TableCell>
            <TableCell>piątek</TableCell>
            <TableCell>
              par. 2 ust.1 roz. MENiS z dn. 18 kwietnia 2002r.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Święto Pracy</TableCell>
            <TableCell>1 maja</TableCell>
            <TableCell>środa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Święto Konstytucji 3 Maja</TableCell>
            <TableCell>1 - 3 maja</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Egzamin maturalny: - pisemny (od 7.05 do 24.05.2024 r.) - ustny
              (od 21.05 do 24.05.2024 r.)
            </TableCell>
            <TableCell>7, 8, 9, 13 maja</TableCell>
            <TableCell></TableCell>
            <TableCell>
              dni wolne od zajęć dyd. roz. MEN z dn. 5 października 2010 r.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wystawienie zagrożeń ocenami niedostatecznymi i nagannym
              zachowaniem oraz poinformowanie rodziców
            </TableCell>
            <TableCell>do 17 maja</TableCell>
            <TableCell>piątek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wywiadówka</TableCell>
            <TableCell>23 maja</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Boże Ciało</TableCell>
            <TableCell>30 maja</TableCell>
            <TableCell>czwartek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Wystawienie propozycji ocen z wszystkich przedmiotów i zachowania
              na koniec roku
            </TableCell>
            <TableCell>do 7 czerwca</TableCell>
            <TableCell>piątek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wpisanie ocen końcowych do dziennika</TableCell>
            <TableCell>do 14 czerwca</TableCell>
            <TableCell>piątek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rada klasyfikacyjna roczna</TableCell>
            <TableCell>18 czerwca</TableCell>
            <TableCell>wtorek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Zakończenie rocznych zajęć dydaktyczno-wychowawczych
            </TableCell>
            <TableCell>21 czerwca</TableCell>
            <TableCell>piątek</TableCell>
            <TableCell>
              par. 2 ust.1 roz. MENiS z dn. 18 kwietnia 2002r.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rada plenarna / roczna</TableCell>
            <TableCell>25 czerwca</TableCell>
            <TableCell>wtorek</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ferie letnie</TableCell>
            <TableCell>22 czerwca - 31 sierpnia</TableCell>
            <TableCell>jw.</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">
            Spotkania z rodzicami - wywiadówki
          </h2>
          <p>W czwartki: 14 września, 25 stycznia, 23 maja,</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Dyżury Nauczycieli</h2>
          <p>Indywidualne spotkania z rodzicami:</p>
          <p>W czwartki w godz. 16:30 - 17:30: 16 listopada, 21 marca.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">
            Święta (Dni ustawowo wolne od pracy)
          </h2>
          <ul className="list-disc list-inside">
            <li>Wszystkich Świętych - 1 listopada 2023 r. (śr.)</li>
            <li>Święto Niepodległości - 11 listopada 2023 r. (sb.)</li>
            <li>Boże Narodzenie - 25, 26 grudnia 2023 r. (pn., wt.)</li>
            <li>Nowy Rok - 1 stycznia 2024 r. (pn.)</li>
            <li>Święto trzech Króli - 6 stycznia 2024 r. (sb.)</li>
            <li>Wielkanoc - 31 marca, 1 kwietnia 2024 r. (nd., pn.)</li>
            <li>Święto Pracy - 1 maja 2024 r. (śr.)</li>
            <li>Święto Konstytucji 3 Maja 2024 r. (pt.)</li>
            <li>Boże Ciało - 30 maja 2024 r. (czw.)</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">
            DNI WOLNE OD ZAJĘĆ DYDAKTYCZNYCH
          </h2>
          <ul className="list-disc list-inside">
            <li>22 września 2023 r. (pt.)</li>
            <li>
              7, 8, 9, 13, 21, 22 maja 2024 r. - pisemne i ustne egzaminy
              maturalne,
            </li>
            <li>2 maja 2024 r. (czw.),</li>
            <li>31 maja 2024 r. (pt.).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
