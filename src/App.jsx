import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserContextProvider } from "./contexts/UserContext";


function App() {
  return (
    <div>
      <UserContextProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" exact>
            {/* /?variant=most_liked */}
            <PageLayout>Home</PageLayout>
          </Route>
          <Route path="/profile/:nick">
            <PageLayout>Profile page</PageLayout>
          </Route>
          <Route path="/detail/:twitId">
            <PageLayout>Twit detail</PageLayout>
          </Route>
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
