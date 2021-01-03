import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import Header from "./home/Header.js";
import AuthProvider from "./components/AuthContext";
import PrivateRoute from "./dashboard/components/PrivateRoute";
import Practice from "./dashboard/components/Practice";
import Explore from "./dashboard/components/Explore";
import Community from "./dashboard/components/Community";
import Feedback from "./dashboard/components/Feedback";
import updateProfile from "./dashboard/components/UpdateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/dashboard/practice" component={Practice} />
          <PrivateRoute path="/dashboard/explore" component={Explore} />
          <PrivateRoute path="/dashboard/community" component={Community} />
          <PrivateRoute path="/dashboard/feedback" component={Feedback} />
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
