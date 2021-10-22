import './App.css';
import styled from "styled-components";
import { AppContext } from "./context";
import StudentsData from "./data/StudentsData.json";
import Router from "./Router";

function App() {
  return (
    <AppContext.Provider value={StudentsData}>
      <Wrapper>
          <Container>
              <Router />
          </Container>
      </Wrapper>
    </AppContext.Provider>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #f2f2f2;
`;

const Container = styled.div`
  width: 1024px;
  padding: 20px;
`;

export default App;
