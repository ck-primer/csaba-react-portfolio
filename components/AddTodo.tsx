import { useContext, useRef, useState } from 'react';
import { UserContext } from '../lib/context';
import {firestore, serverTimestamp} from "../lib/firebase";
import kebabCase from 'lodash.kebabCase';
import {TodosContext} from "../pages/todo";


function AddTodo() {
  const { user, username } = useContext(UserContext);
  const inputRef = useRef(null);
  const todoRef = useRef(TodosContext);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = inputRef.current.value;
    const data = {
      todo,
      createdAt: serverTimestamp(),
      isDone: false,
      isArchived: false
    }
    const slug = kebabCase(todo);
    const ref = firestore.collection('users').doc(user.uid).collection('todos').doc(slug);
    await ref.set(data);
  }
  return (
    <div className="col-12 col-md-6 offset-md-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo">Todo</label>
          <input
            id="todo"
            ref={inputRef}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
export default AddTodo;
