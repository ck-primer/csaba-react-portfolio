import { useContext } from 'react';
import { UserContext } from '../../lib/context';
import { firestore } from '../../lib/firebase';
import styles from './ToDoItem.module.css';

function ToDoItem({ todo }) {
  const { user } = useContext(UserContext);
  const ref = firestore
    .collection('users')
    .doc(user.uid)
    .collection('todos')
    .doc(todo.id);

  async function handleComplete(todo) {
    await ref.set({
      ...todo,
      isDone: !todo.isDone,
    });
  }
  async function handleArchive(todo) {
    await ref.set({
      ...todo,
      isArchived: !todo.isArchived,
    });
  }
  return (
    <li className="list-group-item">
      <span className={todo.isDone ? styles.completed : ''}>{todo.todo}</span>
      <button
        className="m-2 btn btn-warning"
        onClick={() => handleComplete(todo)}
      >
        Complete
      </button>
      <button className="m-2 btn btn-danger" onClick={() => handleArchive(todo)}>Archive</button>
    </li>
  );
}
export default ToDoItem;
