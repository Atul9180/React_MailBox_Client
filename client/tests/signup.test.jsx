// import { render, screen } from "@testing-library/react";
// import { Signup } from "../src/pages";
// import { describe, expect } from "vitest";

// describe("Signup Component", () => {
//   it("should render signup component corectly", () => {
//     render(<Signup />);
//     const element = screen.getByRole("heading");
//     expect(element).toBeInTheDocument();
//   });
// });

import { render, screen } from "@testing-library/react";
import Signup from "../src/pages/Signup.jsx";
import { suite, test, expect } from "vitest";

suite("Signup Component", () => {
  test("should render signup component correctly", () => {
    render(<Signup />);
    const element = screen.getByRole("heading", { name: /Sign Up/i });
    expect(element).toBeInTheDocument();
  });
});
