// Core
import { FC, useEffect, useRef } from 'react';
import  { Form, Input as AntInput, InputRef} from 'antd';
// Types
import { InputPropTypes } from './Input.types';

const Input: FC<InputPropTypes> = (props) => {
    const { name, placeholder, type, isFocus } = props;
    const inputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (isFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocus]);

    return (
        <Form.Item
            name={name}
            rules={[{ required: true, message: 'The field is required.' }]}
            shouldUpdate
        >
            <AntInput 
                ref={inputRef}
                size='large'
                placeholder={placeholder}
                type={type}
            />
        </Form.Item>
    );
};

export default Input;