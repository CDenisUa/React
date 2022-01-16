import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";

export const SignUp = () => {
    const { push } = useHistory();
    const dispatch = useAppDispatch();
    const handleRegister = (email:string, password:string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.refreshToken,
                    }
                ));
                push('/');
            })
            .catch(console.error);
    }

    return (
        <Form
            title='Register'
            handleClick={handleRegister}
        />
    )
}