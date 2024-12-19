import { jwtDecode } from "jwt-decode";
import { useState, createContext } from "react";
import { isPast } from "date-fns";
export const AuthContext = createContext();

/*
<AuthContextProvider>
....
</AuthContextProvider>
*/

export const AuthContextProvider = (props)=> {
    
    const token = localStorage.getItem("kiwitter_user");

    let initialUser = null;

    const { children } = props;

    if(token){

        const decodedToken = jwtDecode(token);

        const isTokenExpired = isPast(new Date(decodedToken.exp * 1000));

        if(isTokenExpired){
            localStorage.removeItem("kiwitter_user");
        }else{
            initialUser = decodedToken;
        }
    }

    const [user, setUser] = useState(initialUser);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}