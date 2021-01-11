import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import Explore from "./explore/Explore";
import Friends from "./dashboard/main/Friends";
import Header from "./home/Header.js";
import AuthProvider from "./components/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Goodscore";
  }, []);

  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/explore" component={Explore} />
          <PrivateRoute path="/friends" component={Friends} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
