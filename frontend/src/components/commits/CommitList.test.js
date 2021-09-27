import React from "react";
import { render } from "@testing-library/react";
import { CommitList } from "./CommitList";
describe("Commit List", () => {
  it("Should be exist", () => {
    expect(CommitList).toBeDefined();
  });
  it("Should display empty message", () => {
    const commits = [];
    const { getByTestId } = render(<CommitList commits={commits} />);

    expect(getByTestId("no-commits-found")).toBeDefined();
  });
});
