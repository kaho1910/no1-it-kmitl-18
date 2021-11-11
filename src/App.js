import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Main from "./pages/Main";
import Games from "./pages/Games";
import Accessories from "./pages/Accessories";
import Features from "./pages/Features";
import Entertainment from "./pages/Entertainment";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Router basename="/project/g33playstation">
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
            <Footer />
        </div>
    );
}
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});
export default App;
