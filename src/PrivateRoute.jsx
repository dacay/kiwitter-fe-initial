import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

export default function PrivateRoute({ children, ...rest }) {

    const { user } = useContext(AuthContext);

    console.log("PrivateRoute icindeyiz.");
 
    return <Route {...rest} render={({ location }) => user ? (children) : <Redirect to={{
        pathname: "/login",
        state: { from: location }
    }} />} />;
}