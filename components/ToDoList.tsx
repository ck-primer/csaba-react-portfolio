import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { firestore } from '../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ToDoItem from './ToDoItem/ToDoItem';

function ToDoList() {
  const { user, username } = useContext(UserContext);
  const todoRef = firestore.collection('users').doc(user.uid).collection('todos');
  const query = todoRef.where("isArchived","!=", true);
  const [querySnapshot, loading, error] = useCollection(query);

  const todos = querySnapshot
    ? querySnapshot?.docs.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        return { id, ...data };
      })
    : [];

  return (
    <>
      <h2>ToDoList</h2>
      {loading ? "loading..." : (<ul className="list-group">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
        ))}
        </ul>)}
    </>
  );
}
export default ToDoList;
