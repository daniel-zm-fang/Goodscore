import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import Header from "./home/Header.js";
import AuthProvider from "./components/AuthContext";
import PrivateRoute from "./dashboard/components/PrivateRoute";
import updateProfile from "./dashboard/components/UpdateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Header />
        
        <Switch>
          <Route path="/home" component={HomePage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute
            path="/dashboard/update-profile"
            component={updateProfile}
          />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
