import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Greet from "./greet";

test("testing the greeting", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("testing the greeting with name", () => {
  const name = "mamaly";
  render(<Greet name={name} />);
  const GreetText = screen.getByText(`hello to you ${name}`);
  expect(GreetText).toBeInTheDocument();
});
