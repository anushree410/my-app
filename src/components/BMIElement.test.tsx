import { act, render, screen, waitFor } from "@testing-library/react";
// import React from "react";
import userEvent from "@testing-library/user-event";
import { BMIElement } from "./BMIElement";
import { renderHook } from "@testing-library/react";
import { UseInputProps } from "./hooks/useInput";
import useInput from "./hooks/useInput";
describe("BMI Element", () => {
  test("renders correctly", () => {
    render(<BMIElement />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("BMI Calculator");
    const heightInput = screen.getByLabelText(/height/i);
    expect(heightInput).toBeInTheDocument();
    const weightInput = screen.getByLabelText(/weight/i);
    expect(weightInput).toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveTextContent(/submit/i);
    expect(submitButton).toBeInTheDocument();
    const inputElements = screen.getAllByRole("spinbutton");
    expect(inputElements).toHaveLength(2);
  });

  test("displays out of bounds properly", async () => {
    // userEvent.setup();
    render(<BMIElement />);
    const heightInput = screen.getByLabelText(/height/i);
    const weightInput = screen.getByLabelText(/weight/i);

    const HeightBound = screen.getByText(/height out of bounds/i);
    const WeightBound = screen.getByText(/weight out of bounds/i);
    const submitButton = screen.getByRole("button");

    expect(HeightBound).toBeVisible();
    expect(WeightBound).toBeVisible();

    act(() => {
      userEvent.type(heightInput, "160");
    });
    await waitFor(() => {
      expect(HeightBound).not.toBeVisible();
    });
    act(() => {
      userEvent.type(heightInput, "0");
    });
    await waitFor(() => {
      expect(HeightBound).toBeVisible();
    });
    act(() => {
      userEvent.type(weightInput, "42");
    });
    await waitFor(() => {
      expect(WeightBound).not.toBeVisible();
    });
  });
});

describe("useInput Hook", () => {
  // test("uses initial default value properly", () => {
  //   const { result } = renderHook(useInput);
  //   expect(result.current.values).toBe(0);
  // });
  // test("uses provided initial value properly", () => {
  //   const { result } = renderHook(useInput, {
  //     initialProps: { initialValue: 10 },
  //   });
  //   expect(result.current.values).toBe(10);
  // });
});

export {};
