import { render } from "@testing-library/react";
import App from "./App";

// MOCK react-router-dom
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: () => null,
  Link: ({ children }) => <span>{children}</span>,
  useParams: () => ({ id: "1" }),
}));

test("renders app without crashing", () => {
  render(<App />);
});
