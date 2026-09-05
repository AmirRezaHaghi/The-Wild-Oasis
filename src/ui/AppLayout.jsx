import { Outlet } from "react-router";
import styled, { keyframes } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const pulse = keyframes`
   0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.25);
    opacity: 1;
  }
`;

const Bullet = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10b981;
  animation: ${pulse} 1s ease-in-out infinite;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-red-700);
  color: white;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <Sidebar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
      <Footer>
        <Bullet />
        <span>BUILT PIXEL BY PIXEL BY AMIRREZA</span>
      </Footer>
    </>
  );
}

export default AppLayout;
