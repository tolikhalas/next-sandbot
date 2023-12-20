import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeView from "@/pages";

describe("Home", () => {
  const wrapper = render(<HomeView />);
  test("should render properly", () => {
    expect(wrapper).toBeDefined();
  });
  test("should have proper heading", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: "Home page" })
    ).toBeDefined();
  });
});
