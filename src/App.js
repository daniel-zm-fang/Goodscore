import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import Header from "./home/Header.js";
import AuthProvider from "./components/AuthContext";
import PrivateRoute from "./dashboard/components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
