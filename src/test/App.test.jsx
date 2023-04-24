import { assert, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    const headline = screen.getByText("Test vitest");

    expect(headline).toBeInTheDocument();
  });
});
