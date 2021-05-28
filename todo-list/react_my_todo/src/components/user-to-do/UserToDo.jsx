import { React, useState } from 'react';
import { FaTimes, FaPen } from "react-icons/fa";
import styles from './UserToDo.module.scss';

const UserToDo = () => {
    const [prevInputValue, setInputValue] = useState('');
    const [myTasks, setMytasks] = useState([
        { id: 1, name: 'Изучить UseRef', done: false },
        { id: 2, name: 'Написать TODO', done: false },
        { id: 3, name: 'Прочитать книгу по JS', done: false },
        { id: 4, name: 'Выйти прогуляться', done: false }
    ]);

    const addTodo = () => {
        setMytasks([
            ...myTasks,
            {
                id: Math.random(),
                name: prevInputValue,
                done: false
            }
        ]);
        setInputValue('');
    }
    return (
        <>
            <div className={styles.userAdd}>
                <input
                    className={styles.input}
                    value={prevInputValue}
                    onChange={
                        (event) => {
                            setInputValue(event.target.value)
                        }
                    }
                    onKeyUp={(e) => {
                        e.key === 'Enter' && addTodo();
                    }}
                />
                <div>
                    <button
                        className='add'
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
            </div>
            <div className={styles.addContainer}>
                <ul className={styles.todolist}>
                    {myTasks.map(task => (
                        <li className={styles.todo} key={task.id}>
                            <span>{task.name}</span>
                            <div>
                                <FaPen
                                    className={styles.icon}
                                />
                                <FaTimes
                                    className={styles.icon}
                                    onClick={() => setMytasks(
                                        myTasks.filter(item => {
                                            return item && item.id !== task.id
                                        })
                                    )}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>);
};

export default UserToDo;