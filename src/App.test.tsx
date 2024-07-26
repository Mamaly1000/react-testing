import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Greet from "./components/greet";
describe.skip("*app*", () => {
  test("testing the app", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
describe.skip("*greet*", () => {
  test("testing the greeting with name", () => {
    const name = "mamaly";
    render(<Greet name={name} />);
    const GreetText = screen.getByText(`hello to you ${name}`);
    expect(GreetText).toBeInTheDocument();
  });
  test("greet has a heading", () => {
    render(<Greet name="mamaly" />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /hello to you/,
    });
    expect(heading).toBeInTheDocument();
  });
  test("test registration-form render", () => {
    render(<Greet />);
    const formElement = screen.getByRole("heading", {
      level: 1,
      name: "this is a registration form",
    });
    expect(formElement).toBeInTheDocument();
  });
  test("test login-form render", () => {
    render(<Greet />);
    const formElement = screen.getByRole("heading", {
      level: 1,
      name: "this is a login form",
    });
    expect(formElement).toBeInTheDocument();
  });
  test("test input placeholder", () => {
    render(<Greet />);
    const inputElement = screen.getByPlaceholderText("enter your name");
    expect(inputElement).toBeInTheDocument();
  });
  test("test input by its value", () => {
    render(<Greet />);
    const inputElement = screen.getByDisplayValue("mamaly");
    expect(inputElement).toBeInTheDocument();
  });
  test("test to find the greeting main image and the image is valid or not", () => {
    render(<Greet />);
    const imageElement = screen.getByAltText("main-image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      expect.stringMatching(/^(?!$|null)/)
    );
  });
  test("test navbar rendered", () => {
    render(<Greet />);
    const openButton = screen.getByTitle("open-navbar");
    expect(openButton).toBeInTheDocument();
  });
  test("test navbar open correctly", () => {
    render(<Greet />);

    const openButton = screen.getByTitle("open-navbar");
    fireEvent.click(openButton);

    const closeButton = screen.getByTitle("close-navbar");
    expect(closeButton).toBeInTheDocument();
  });
});
