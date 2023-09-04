import { createContext,useState,useContext} from "react";
 
export const userContext = createContext({
    user:null,
    login:()=>{},
    logout:()=>{}
});
const USER = {name:'Guest', isGuestUser:true}
export const UserContextProvider = ({children}) =>{
   const [user,setUser] = useState(USER);
   function login(username){
    setUser({isGuestUser:false,name:username})
   }
   function logout(){
    setUser(USER);
   }
   return(
   <userContext.Provider value = {{user,login,logout}}> 
    {children}
   </userContext.Provider>
   )
}; 
export const useUserContext = () =>{
     const {user,login,logout} = useContext(userContext);
     return {user,login,logout}
}