import "./App.css";
import { Home, Rooms, Error, SingleRoom } from "./pages";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
