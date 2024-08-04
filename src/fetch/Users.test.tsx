import { screen, render } from "@testing-library/react";
import Users from "./Users";

describe("users component testing", () => {
  test("renders users component", () => {
    render(<Users />);
    const usersElement = screen.getByTitle("users-header");
    expect(usersElement).toBeInTheDocument();
  });
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});
