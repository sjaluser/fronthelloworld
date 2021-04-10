import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Frontend React JS - Backend Sprint Boot - Runs on AWS & Kubernetes./i
  );
  expect(linkElement).toBeInTheDocument();
});
