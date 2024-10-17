import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function PrivateRoute({ children, ...rest }) {

    const { user } = useContext(UserContext);

    console.log("Private route icindeyiz.");

    return (<Route {...rest} render={({ location}) => user ? (children) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />)} />);
}