import React from 'react';
import styles from './UserContainerTodo.module.scss';

const UserContainerTodo = ({ title, children }) => (
    <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {children}
    </div>
)

export default UserContainerTodo;