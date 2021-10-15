import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Main from "./pages/Main";
import Games from "./pages/Games";
import Accessories from "./pages/Accessories";
import Features from "./pages/Features";
import Entertainment from "./pages/Entertainment";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/games" component={Games} />
                    <Route path="/accessories" component={Accessories} />
                    <Route path="/ps5-features" component={Features} />
                    <Route
                        path="/ps5-entertainment"
                        component={Entertainment}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
