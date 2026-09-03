import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  useDocumentTitle("Dashboard");

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
