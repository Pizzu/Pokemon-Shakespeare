import supertest from "supertest"
import app from "../app.js"
import { fetchPokemonBy } from "../helpers/index.js"

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
        const pokemon = await fetchPokemonBy(pokemonName)
        await supertest(app)
          .get(`/api/pokemon/${pokemonName}`)
          .expect(200)
          .then(response => {
            expect(response.body.name).toBe(pokemon.name)
            expect(response.body.description).toBe(pokemon.description)
          })
      });
    });
  });
});