import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";
import GlobalStyle from "./theme/globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./Practice";
import Explore from "./Explore";
import Community from "./Community";
import Feedback from "./Feedback";
import Home from "./Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Bookmarks />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/practice" component={Practice} />
          <Route path="/explore" component={Explore} />
          <Route path="/community" component={Community} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
