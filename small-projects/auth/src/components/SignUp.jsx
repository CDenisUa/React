import {Form} from './Form';
import {useDispatch} from "react-redux";
import {setUser} from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
    const { push } = useHistory();
    const dispatch = useDispatch();
    const handleRegister = (email, password) => {
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