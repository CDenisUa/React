import IconDelete from '../../../static/svg/close.svg'
import styles from './UserToDo.module.scss';

const UserToDo = () => (
    <div className={styles.userAdd}>
        <input className={styles.input} />
        <IconDelete />
    </div>
);

export default UserToDo;