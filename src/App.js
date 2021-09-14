import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </div>
    </Router>
  );
}

export default App;
