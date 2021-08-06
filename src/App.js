import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/movie/:id">
                      <MoviePage />
                    </Route>
                    <Route path="/users"></Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
