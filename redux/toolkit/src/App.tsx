// Core
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react';
// Custom hooks
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useAppDispatch';
// Redux 
import { addTodo, removeTodo, completeTodo } from './store/slices/todo-slice/todo.slice';
import { todoListSelector } from './store/selectors/todo.selector';
// Styles
import './App.css';

const App = () => {
  const dispatch = useAppDispatch();
  const todo = useAppSelector(todoListSelector);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if(input.trim().length) {
      dispatch(addTodo(input))
      setInput('');
    }
  };
  const handleInputText = (event:ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  const handlePressEnter = (event:DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => event.key === "Enter" && handleAddTodo();
  const handleCheck = (id:string) => dispatch(completeTodo(id));
  
  return (
    <div className="App">
      <input 
        type="text"
        placeholder='Input text'
        value={input}
        onChange={handleInputText}
        onKeyDown={handlePressEnter}
      />
      <button
        onClick={handleAddTodo}
      >
        Add todo
      </button>
      <div
        className='main'
      >
        { todo.map((item): JSX.Element => (
          <div key={item.id} className='todo'>
            <input 
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheck(item.id)}
            />
            <p>{item.title}</p>
            <button
              onClick={() => dispatch(removeTodo(item.id))}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
