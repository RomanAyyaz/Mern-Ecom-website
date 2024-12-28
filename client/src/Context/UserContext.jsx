import { createContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({children})=>{
    const [User,SetUser] = useState();
    const [filter,Setfilter] = useState({
        category:"",
        brand:[]
    })
    const [UserCartlength,SetUserCartlength] = useState(0)
    return (
        <UserContext.Provider value={{User,SetUser ,filter,Setfilter , UserCartlength , SetUserCartlength}}>
            {children}
        </UserContext.Provider>
    )
}