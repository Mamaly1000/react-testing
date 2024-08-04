import { render, screen } from "./../utils/test-utils";
import Mui_Mode from "./mui-mode";

describe.skip("app-theme", () => {
  test("dark mode", () => {
    render(<Mui_Mode />);
    const theme_text_element = screen.getByTitle("theme-text-element");
    expect(theme_text_element).toHaveTextContent("dark mode");
  });
});
