import {createContext, useContext, useState} from "react";

export const userContext= createContext({

user:null,
logIn:()=>{},
logOut:()=>{},

});

const USER={name:"Guest",isGuestuser:true}

export  function  UserContextProvider({children}){
   const[user,setUser]=useState(USER);
  
   function logIn(username){
    setUser({isGuestuser:false,name:username});
   }
   
   function logOut(){
    setUser({isGuestuser:true,name:USER.name});
   }
   
   return(
        <userContext.Provider value={{user,logIn,logOut}}>
        {children}
        </userContext.Provider>
    )
}

export function useUserContext(){
const{user,logIn,logOut}=useContext(userContext);
return{user,logIn,logOut}
}