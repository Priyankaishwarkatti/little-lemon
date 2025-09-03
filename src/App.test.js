import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders BookingForm heading", () => {
  render(<BookingForm availableTimes={["17:00"]} submitForm={() => {}} />);
  const heading = screen.getByText(/Date:/i);
  expect(heading).toBeInTheDocument();
});
