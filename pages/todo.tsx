import {ProviderId} from "firebase/auth";
import {createContext, useContext} from "react";
import AddTodo from '../components/AddTodo';
import ToDoList from "../components/ToDoList";
import {UserContext} from "../lib/context";
import {firestore} from "../lib/firebase";

export const TodosContext =createContext();



function todo() {
  const { user, username } = useContext(UserContext);

  return (
    <>

    <h2>To do list with Firebase</h2>
      <AddTodo />
      <ToDoList />

    </>
  );
}
export default todo;
