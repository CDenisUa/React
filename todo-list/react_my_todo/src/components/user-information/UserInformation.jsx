import styles from './UserInformation.module.scss';

const UserInformation = ({ userName, userAge, }) => (
    <ul className={styles.information}>
        <li>
            <span className={styles.title}>Имя:</span>
            <span className={styles.userInfo}>{userName}</span>
        </li>
        <li>
            <span className={styles.title}>Возраст:</span>
            <span className={styles.userInfo}>{userAge}</span>
        </li>
    </ul>
)

export default UserInformation;