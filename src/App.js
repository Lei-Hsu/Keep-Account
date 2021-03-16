import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import TotalSum from "./components/Home/TotalSum";
import HomePage from "./pages/HomePage/";
import AddPage from "./pages/AddPage/";
import Statistics from "./pages/StatisticsPage/";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #29323c,
    #485563
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #29323c,
    #485563
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const Container = styled.div`
  width: 60vw;
  height: 80vh;
  background: #fff9dc;
  position: relative;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Container>
          <TotalSum />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/add">
              <AddPage />
            </Route>
            <Route exact path="/statistics">
              <Statistics />
            </Route>
          </Switch>
        </Container>
      </Wrapper>
    </Router>
  );
}

export default App;
