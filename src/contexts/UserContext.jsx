import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { isPast } from "date-fns";

export const UserContext = createContext();
// <UserContext.Provider value={{setUser, user}}> </UserContext.Provider>
// const { user, setUser } = useContext(UserContext);

export const UserContextProvider = (props)=> {

    const token = localStorage.getItem("kiwitter_user");

    let initialUser = null;

    if(token){

        const decodeUserInfo = jwtDecode(token);

        const isSessionExpired = isPast(new Date(decodeUserInfo.exp * 1000));
        

        if(isSessionExpired){

            localStorage.removeItem("kiwitter_user");
        }else{
            initialUser = decodeUserInfo;
        }
    }   

    const [user, setUser] = useState(initialUser);


    return (<UserContext.Provider value={{ user, setUser }}>
        {props.children}
    </UserContext.Provider>);
};