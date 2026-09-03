import CheckinBooking from "../features/check-in-out/CheckinBooking";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function CheckIn() {
  useDocumentTitle("Check-in");

  return <CheckinBooking />;
}

export default CheckIn;
