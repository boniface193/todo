import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

import styles from '../style/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChanges, delTodo }) => {

  return (<li className={styles.item}>
    <div className={styles.content}>
      <div>
        <input type="checkbox" checked={itemProp.completed} onChange={() => handleChanges(itemProp.id)} />
        <span className={styles.items}>{itemProp.title}
        </span>
      </div>
      <FontAwesomeIcon onClick={() => delTodo(itemProp.id)} className={styles.button} icon={faTrashCan} />
    </div>
  </li>)
};

export default TodoItem;
