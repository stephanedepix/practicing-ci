import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Page from "../app/page";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", {
      name: /hello, next.js/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
