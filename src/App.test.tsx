import { render, screen } from "@testing-library/react";
import App from "./App";
import Greet from "./greet";

describe("*app*", () => {
  test("testing the app", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
describe("*greet*", () => {
  test("testing the greeting with name", () => {
    const name = "mamaly";
    render(<Greet name={name} />);
    const GreetText = screen.getByText(`hello to you ${name}`);
    expect(GreetText).toBeInTheDocument();
  });
});
