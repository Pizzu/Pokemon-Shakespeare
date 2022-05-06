import React from "react";
import { SectionLayout, Hero, Button } from "./components/common";

const App: React.FC = () => {

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Click")
  }

  return (
    <main>
      <SectionLayout>
        <div className="grid grid-flow-row gap-10 max-w-3xl mx-auto">
          <Hero>
            <h1>Pokemon Shakespeare</h1>
            <p>Type on the search field a pokemon name</p>
          </Hero>
          <form onSubmit={onFormSubmit} className="grid grid-cols-7 items-stretch gap-6">
            <label htmlFor="pokemon" className="block col-span-5">
              <input type="text" id="pokemon" name="pokemon" className="h-full px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-lg focus:ring-1"
                placeholder="Charizard, Bulbasaur, Wartortle ..." />
            </label>
            <div className="col-span-2">
              <Button type="submit" className="bg-primary text-white">Search Now</Button>
            </div>
          </form>
        </div>
      </SectionLayout>
    </main>
  );
}

export default App;
