import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("pokemon", () => {
  test("renders hero content", () => {
    render(<App />);
    const mainElement = screen.getAllByRole("main");
    expect(mainElement[0]).toBeInTheDocument();
    expect(mainElement[0]).toHaveTextContent("Pokemon Shakespeare")
    expect(mainElement[0]).toHaveTextContent("Type on the search field a pokemon name")
  });
})


