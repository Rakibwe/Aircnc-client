import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Home from './Component/Home/Home';
import Division from './Component/Division/Division';
import RoomDetail from './Component/Division/RoomDetail/RoomDetail';
import HouseRules from './Component/HouseRules/HouseRules';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/division">
          <Division />
        </Route>
        <Route path="/roomDetail:id">
          <RoomDetail />
        </Route>
        <Route path="/houseRules">
          <HouseRules />
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
