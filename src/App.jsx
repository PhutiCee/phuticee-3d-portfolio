import styled from "styled-components";
import About from "./components/About"
import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Work from "./components/Work"

const Container = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
    <Container>
      <Hero />
      <About />
      <Work />
      <Contacts />
    </Container>
  )
}

export default App
