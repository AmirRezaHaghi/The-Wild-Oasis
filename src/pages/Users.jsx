import SignupForm from "../features/authentication/SignupForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Heading from "../ui/Heading";

function NewUsers() {
  useDocumentTitle("Users");
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
