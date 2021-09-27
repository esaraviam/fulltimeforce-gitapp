//Write a test for the ErrorAlert component using @testing-library/jest-dom and data-testid="ErrorAlert-title" to test the title.
import React from "react";
import { render } from "@testing-library/react";
import { ErrorAlert } from "./ErrorAlert";

describe("ErrorAlert", () => {
  it("renders the title", () => {
    const { getByTestId } = render(
      <ErrorAlert title="Error" message="Something went wrong" />
    );
    expect(getByTestId("ErrorAlert-title")).toHaveTextContent("Error");
  });
  it("should render error message", () => {
    const { getByText } = render(
      <ErrorAlert title="Error" message="Something went wrong" />
    );
    expect(getByText("Something went wrong")).toBeInTheDocument();
  });
});
