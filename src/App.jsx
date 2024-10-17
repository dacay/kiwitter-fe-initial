import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
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
          <PrivateRoute path="/detail/:twitId">
            <PageLayout>Twit detail</PageLayout>
          </PrivateRoute>
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
