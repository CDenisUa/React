import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import {useAppDispatch} from "../hooks/redux-hooks";

export const Login = () => {
    const {push} = useHistory();
    const dispatch = useAppDispatch();
    const handleLogin = (email:string ,password:string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    }
                ));
                push('/');
            }).catch(error => console.warn(error))
    }
    return (
        <Form
            title='Sign in'
            handleClick={ handleLogin }
        />
    )
}