import { React, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import cx from "classnames";
import styles from './UserToDo.module.scss';

const UserToDo = () => {
    const [prevInputValue, setInputValue] = useState('');
    const [prevListTodo, setListTodo] = useState({
        id: '',
        name: '',
        done: false,
    });
    return (
        <>
            <div className={styles.userAdd}>
                <input
                    className={styles.input}
                    onChange={
                        (e) => {
                            setInputValue(e.target.value);
                        }
                    }
                />
                <div>
                    <FaPlus
                        className={cx(styles.icon, styles.add)}
                        onClick={() => {
                            console.log('add')
                        }}
                    />
                    <FaTimes
                        className={cx(styles.icon, styles.delete)}
                        onClick={() => {
                            console.log('delete');
                        }}
                    />
                </div>
            </div>
            <div className={styles.addContainer}></div>
        </>);
};

export default UserToDo;