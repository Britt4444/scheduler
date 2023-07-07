import React from "react";
import {   render, cleanup, prettyDOM,
fireEvent, waitForElement, getAllByTestId,
getByText, getByAltText, getByPlaceholderText,
queryByText, queryByAltText }
  from "@testing-library/react";
import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {

  it("defaults to Monday and changes the schedule when a new day is selected", async () => {
    const { getByText } = render(
      <Application />
    );
    await waitForElement(() => getByText("Monday"));
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {
    //cannot read property of undefined, reading "then" in UseApplicationData
    const onSave = jest.fn(() => Promise.resolve());
    const container = (render(<Application onSave={onSave}/>)).container;
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointment = getAllByTestId(container, "appointment")[0];
    console.log(prettyDOM(appointment));
    fireEvent.click(getByAltText(appointment, 'Add'));
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, 'Save'));
    console.log(prettyDOM(appointment));
  });
});