// Core
import { FC } from 'react';
import  { Form, Input as AntInput} from 'antd';
// Types
import { InputPropTypes } from './Input.types';

const Input: FC<InputPropTypes> = (props) => {
    const { name, placeholder, type } = props;
    return (
        <Form.Item
            name={name}
            rules={[{ required: true, message: 'The field is required.'}]}
            shouldUpdate
        >
            <AntInput 
                size='large'
                placeholder={placeholder}
                type={type}
            />
        </Form.Item>
    );
};

export default Input;