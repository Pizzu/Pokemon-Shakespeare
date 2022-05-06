import React from "react";
import { SectionLayout } from "./components/common";

const App: React.FC = () => {
  return (
    <main>
      <SectionLayout>
        <div className="grid grid-flow-row gap-10 max-w-3xl mx-auto">
          <div className="text-center">
            <h1>Pokemon Shakespeare</h1>
            <p>Type on the search field a pokemon name</p>
          </div>
          <form className="grid grid-cols-7 items-stretch gap-6">
            <label htmlFor="pokemon" className="block col-span-5">
              <input type="text" id="pokemon" name="pokemon" className="h-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-lg focus:ring-1"
                placeholder="Charizard, Bulbasaur, Wartortle ..." />
            </label>
            <div className="col-span-2">
              <button className="nav-link bg-primary text-white rounded-lg px-6 py-3">Search Now</button>
            </div>
          </form>
        </div>
      </SectionLayout>
    </main>
  );
}

export default App;
