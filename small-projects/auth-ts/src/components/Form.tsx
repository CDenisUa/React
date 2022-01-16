import {FC, useState} from 'react';


interface FormProps {
    title: string,
    handleClick: (email:string, pass: string) => void;
}

export const Form:FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (
        <div>
            <input
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email"
            />
            <input
                type='password'
                value={pass}
                onChange={(event) => setPass(event.target.value)}
                placeholder="password"
            />
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}