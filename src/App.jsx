import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageLayout from "./PageLayout";
import Login from "./Login";
import Signup from "./Signup";
import MainPage from "./MainPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/" exact>
            {/* /?variant=most_liked */}
            <MainPage />
          </Route>
          <Route path="/profile/:nick">
            <PageLayout>Profile page</PageLayout>
          </Route>
          <PrivateRoute path="/detail/:twitId">
            <PageLayout>Twit detail</PageLayout>
          </PrivateRoute>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
