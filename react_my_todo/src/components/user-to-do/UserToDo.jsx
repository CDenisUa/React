import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import cx from "classnames";
import styles from './UserToDo.module.scss';

const UserToDo = () => (
    <div className={styles.userAdd}>
        <input className={styles.input} />
        <div>
            <FaPlus className={cx(styles.icon, styles.add)} />
            <FaTimes className={cx(styles.icon, styles.delete)} />
        </div>
    </div>
);

export default UserToDo;