import styles from '../style/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChanges, delTodo }) => {

  return (<li className={styles.item}>
    <div className={styles.content}>
      <input type="checkbox" checked={itemProp.completed} onChange={() => handleChanges(itemProp.id)} />
      <span className={styles.items}>{itemProp.title}
      </span>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
    </div>
  </li>)
};

export default TodoItem;
