import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import UserProfile from "./components/UserProfile";
import Dashboard from "./dashboard/Dashboard";
import Header from "./home/Header.js"

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Header />
        <Switch>   
          <Route path="/profile" component={UserProfile} />
          <Route path="/home" component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />      
        </Switch>
    </Router>
  );
}

export default App;
