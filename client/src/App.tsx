import React from "react";
import { SectionLayout, Hero } from "./components/common";
import { PokemonSearch } from "./components/pokemon";

const App: React.FC = () => {
  return (
    <main role="main">
      <SectionLayout>
        <div className="grid grid-flow-row gap-10 max-w-3xl mx-auto">
          <Hero>
            <h1>Pokemon Shakespeare</h1>
            <p>Type on the search field a pokemon name</p>
          </Hero>
          <PokemonSearch />
        </div>
      </SectionLayout>
    </main>
  );
}

export default App;
