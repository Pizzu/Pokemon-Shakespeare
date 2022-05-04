import supertest from "supertest"
import app from "../app.js"
import axios from "axios"

describe("pokemon", () => {
  describe("get pokemon route", () => {
    describe("given the pokemon does not exist or it is impossible to translate", () => {
      it("should return a 500 status", async () => {
        const pokemonName = "notAPokemonName"
        await supertest(app)
          .get(`/api/pokemon/${pokemonName}`)
          .expect(500)
      });
    });
    describe("given the pokemon does exist", () => {
      it("should return a 200 status and an object containing name and description", async () => {
        const pokemonName = "charizard"
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(res => res.data)
        const pokemonSpecies = await axios.get(pokemon.species.url).then(res => res.data)
        const pokemonDescription = pokemonSpecies.flavor_text_entries[0].flavor_text.replace(/[\n\r\f]+/g, ' ')
        const pokemonTranslation = await axios.post("https://api.funtranslations.com/translate/shakespeare.json", 
          {
            text: pokemonDescription
          }
        ).then(res => res.data)
        await supertest(app)
          .get(`/api/pokemon/${pokemonName}`)
          .expect(200)
          .then(response => {
            expect(response.body.name).toBe(pokemonName)
            expect(response.body.description).toBe(pokemonTranslation.contents.translated)
          })
      });
    });
  });
});