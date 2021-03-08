import { React, useState } from 'react';
import styles from './UserToDo.module.scss';

const UserToDo = () => {
    const [prevInputValue, setInputValue] = useState('');
    const [myTasks, setMytasks] = useState([
        { id: 1, name: 'Изучить UseRef', done: false },
        { id: 2, name: 'Написать TODO', done: false },
        { id: 3, name: 'Прочитать книгу по JS', done: false },
        { id: 4, name: 'Выйти прогуляться', done: false }
    ]);
    console.log(myTasks)
    return (
        <>
            <div className={styles.userAdd}>
                <input
                    className={styles.input}
                    value={prevInputValue}
                    onChange={
                        (e) => {
                            setInputValue(e.target.value)
                        }
                    }
                />
                <div>
                    <button
                        className='add'
                        onClick={() => {
                            setMytasks([
                                ...myTasks,
                                {
                                    id: Math.random(),
                                    name: prevInputValue,
                                    done: false
                                }
                            ]
                            )
                        }}
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
                            <button
                                onClick={() => setMytasks(
                                    myTasks.filter(item => {
                                        return item && item.id !== task.id
                                    })
                                )}
                            >
                                delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>);
};

export default UserToDo;