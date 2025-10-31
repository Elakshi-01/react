import { createContext } from "react";
import { useContext } from "react";

export const Todocontext=createContext({

todos : [
    {
        id:1,
        todo: "todo msg",
        completed : false
    }
],
addtodo : (todo) => {},
updatetodo : (id,todo) => {},
deletetodo :(id) => {},
toggletodo : (id) => {}


});

export const TodocontextProvider=Todocontext.Provider;

export const useTodo = () => {
    return useContext(Todocontext);
}