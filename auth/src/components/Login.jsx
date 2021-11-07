import {Form} from './Form';
import {useDispatch} from "react-redux";
import {setUser} from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

export const Login = () => {
    const {push} = useHistory();
    const dispatch = useDispatch();
    const handleLogin = (email,password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
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