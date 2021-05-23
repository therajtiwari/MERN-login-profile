import React from "react";

// components
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";

import { Container } from "react-bootstrap";

//router
import { BrowserRouter as Router, Route } from "react-router-dom";

// custom css
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid className="text-center py-5">
          <Route path="/login" component={LoginScreen} />
          {/* <Route path="/" component={HomeScreen} exact /> */}
        </Container>
      </main>
    </Router>
  );
}

export default App;
