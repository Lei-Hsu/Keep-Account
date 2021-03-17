import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { GlobalProvider } from "./context/GlobalState";

import TotalSum from "./components/Home/TotalSum";
import HomePage from "./pages/HomePage/";
import AddPage from "./pages/AddPage/";
import Statistics from "./pages/StatisticsPage/";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 60vw;
  min-height: 70vh;
  padding-bottom: 130px;
  margin: 20px 0;
  background: #fff9dc;
  position: relative;
`;

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Wrapper>
          <Container>
            <TotalSum />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/add">
                <AddPage />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
            </Switch>
          </Container>
        </Wrapper>
      </GlobalProvider>
    </Router>
  );
}

export default App;
