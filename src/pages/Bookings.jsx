import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  useDocumentTitle("Bookings");
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
