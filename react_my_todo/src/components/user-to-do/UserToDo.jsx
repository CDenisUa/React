import styles from './UserToDo.module.scss';

const UserToDo = () => (
    <div className={styles.userAdd}>
        <input className={styles.input} />
        <div>
            <span>add</span>
            <span>delete</span>
        </div>
    </div>
);

export default UserToDo;