import Heading from "@/components/Heading";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col start justify-center gap-10 w-full">
      <Heading
        title="Dokumenty"
        description="Dokumenty i inne informacje do pobrania, dotyczące SLO."
      />
      <div className="grid grid-cols-3 gap-2 p-8 border rounded-lg">
        <ul className="list-disc list-inside">
          <li>Zasady Funkcjonowania SLO w czasie pandemii COVID-19</li>
          <li>Zasady organizacji zdalnego nauczania w SLO</li>
          <li>Status SLO</li>
          <li>Aneks do Statutu SLO</li>
          <li>Oświadczenie o rezygnacji z zajęć religii</li>
          <li>Oświadczenie o rezygnacji z zajęć wdż</li>
          <li>Wniosek o zwalnianie ucznia</li>
          <li>Procedury postępowania</li>
          <li>Program Wychowawczo-Profilaktyczny PDF</li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
