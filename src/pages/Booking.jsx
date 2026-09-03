import BookingDetail from "../features/bookings/BookingDetail";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Booking() {
  useDocumentTitle("Booking");

  return <BookingDetail />;
}

export default Booking;
