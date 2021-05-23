import React from "react";

// components
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

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
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
