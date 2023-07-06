import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import Form from "components/Appointment/Form";

afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      student: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];
  const { getByPlaceholderText } = render(
    <Form interviewers={interviewers} />
  );

  it("renders without student name if not provided", () => {
    expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
  });

  it("renders with initial student name", () => {
    const { getByTestId } = render(
      <Form interviewers={interviewers} student='Lydia Miller-Jones' />
    );
    expect(getByTestId('student-name-input')).toHaveValue('Lydia Miller-Jones');
  });

  it("validates that the student name is not blank", () => {
    const onSave = jest.fn(() => { });
    const { getByText } = render(
      <Form interviewers={interviewers} onSave={onSave} student="" />
    );
    fireEvent.click(getByText('Save'));
    expect(getByText(/Student name cannot be blank/i)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it("validates that the interviewer cannot be null", () => {
    const onSave = jest.fn(() => { });
    const { getByText, queryByText } = render(
      <Form interviewers={interviewers} onSave={onSave} student="Lydia Miller-Jones"/>
    );
    fireEvent.click(getByText('Save'));
    expect(queryByText(/Student name cannot be blank/i)).toBeNull();
    expect(getByText(/Please select an interviewer/i)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it("calls onSave function when the name and interviewer is defined", () => {
    const onSave = jest.fn(() => { });
    const { getByText, queryByText } = render(
      <Form 
      interviewers={interviewers} 
      onSave={onSave} 
      student='Lydia Miller-Jones' 
      interviewer={interviewers[0].id}
      />
    );
    fireEvent.click(getByText("Save"));
    expect(queryByText(/Student name cannot be blank/i)).toBeNull();
    expect(queryByText(/Please select an interviewer/i)).toBeNull();
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", 1);

  });
});
