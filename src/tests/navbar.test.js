import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar"; // correct import

test("navbar shows correct links", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Scope queries to the navbar
  const navbar = screen.getByRole("navigation");
  const navLinks = within(navbar);

  expect(navLinks.getByText(/^Home$/i)).toBeInTheDocument();
  expect(navLinks.getByText(/^Movies$/i)).toBeInTheDocument();
  expect(navLinks.getByText(/^TV Series$/i)).toBeInTheDocument();
  expect(navLinks.getByText(/^Contact Us$/i)).toBeInTheDocument();

  // Optional: check main heading
  expect(screen.getByText(/Movie Marathon/i)).toBeInTheDocument();
});
