import Heading from "@/components/Heading";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col start justify-center gap-10 w-full">
      <Heading
        title="Nauczyciele"
        description="Lista nauczycieli pracujących w naszej szkole."
      />
      <div className="grid grid-cols-3 gap-2 p-8 border rounded-lg">
        <ul className="list-disc list-inside">
          <li>Adamska Anna [AD]</li>
          <li>Barańska-Kluk Anna [AB]</li>
          <li>Bełczowski Robert [RB]</li>
          <li>Bilska - Kokosińska Aldona [AK]</li>
          <li>Brzeziński Andrzej [Br]</li>
          <li>Budkowska Alina [BD]</li>
          <li>Buława Małgorzata [Bu]</li>
          <li>Butryn Monika [MB]</li>
          <li>Ciołkosz Monika [CI]</li>
          <li>Ciozda Dorota [DC]</li>
          <li>Czopor Marek [DR]</li>
          <li>Felczak Katarzyna [KF]</li>
          <li>Felczak Piotr [FE]</li>
          <li>Figurniak Janusz [Fi]</li>
          <li>Figurniak Joanna [JF]</li>
          <li>Gątarz Anna [Gą]</li>
          <li>Geraghty Paul [PG]</li>
          <li>Giec-Rej Agnieszka [AG]</li>
          <li>Gorczyca Bogusław [BG]</li>
          <li>Góral Władysława[GR]</li>
          <li>Grega-Stendiuch Marzena [GE]</li>
          <li>Gutka Małgorzata [GU]</li>
          <li>Jakubecka Joanna [JJ]</li>
          <li>Jarzyńska Ewa [EH]</li>
          <li>Jaskólska Ewa [JA]</li>
        </ul>
        <ul className="list-disc list-inside">
          <li>Kiec Edyta [KE]</li>
          <li>Koluch Tomasz [TK]</li>
          <li>Kopyto Bartosz [KP]</li>
          <li>Król Elżbieta [EK]</li>
          <li>Kuśmider Aleksandra [KU]</li>
          <li>Kuśmierz Aleksandra [KA]</li>
          <li>Łyczakowska Jolanta [JŁ]</li>
          <li>Małek Barbara [BM]</li>
          <li>Mastalerczyk Teresa [TM]</li>
          <li>Mazoń Grażyna [GM]</li>
          <li>Mazurkiewicz Wiesława [WM]</li>
          <li>Olejarczyk Małgorzata [MO]</li>
          <li>Pajura Renata [RP]</li>
          <li>Pawłowska Marika [MP]</li>
          <li>Pamuła-Kaczmarczyk Anna [AP]</li>
          <li>Piasta - Jaźwińska Beata [BJ]</li>
          <li>Płoszaj Anna [PŁ]</li>
          <li>Prawica Roman [PR]</li>
          <li>Rychlak Elżbieta [ER]</li>
          <li>Sawa-Kołodziejczyk Monika [SW]</li>
          <li>Sekulska Ewa [SE]</li>
          <li>Sekulski Tomasz [ST]</li>
          <li>Sienkiewicz Robert [RS]</li>
          <li>Siewielec Joanna [JS]</li>
          <li>Sikora Agnieszka [SI]</li>
        </ul>
        <ul className="list-disc list-inside">
          <li>Skwarek Krystyna [KS]</li>
          <li>Sławiński Bernard [SB]</li>
          <li>Sroka Mirosław [SR]</li>
          <li>Stec Kacper [KT]</li>
          <li>Stefaniak Agata [SA]</li>
          <li>Stokłosa Anetta [ST]</li>
          <li>Sudoł Małgorzata [MS]</li>
          <li>Szarama Marzena [MJ]</li>
          <li>Tabor Elżbieta [ET]</li>
          <li>Teśniarz Dorota [DT]</li>
          <li>Teśniarz Marek [MT]</li>
          <li>Tracz Agnieszka [AT]</li>
          <li>Umińska Agnieszka [AU]</li>
          <li>Wcisło Krzysztof [KW]</li>
          <li>Węgiełek Elżbieta [EW]</li>
          <li>Wiatrowicz Barbara [Wi]</li>
          <li>Witaszek Dorota [WD]</li>
          <li>Wojtaś Iwona [IW]</li>
          <li>Wołoszyn Bogusław [BW]</li>
          <li>Woś Dorota [DW]</li>
          <li>Zarzycka Celina [CZ]</li>
          <li>Zontek Tomasz [TZ]</li>
          <li>Zybura Mateusz [ZM]</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
