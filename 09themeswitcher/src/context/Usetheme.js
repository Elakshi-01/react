import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const Usecontext = createContext({
    theme:"light",
    darkt: () => {},
    lightt : () => {},
});



export const UsecontextProvider= Usecontext.Provider;

export default  function useTheme  (){
return useContext(Usecontext);

}




