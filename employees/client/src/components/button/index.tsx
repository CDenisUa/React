// Core
import { FC } from 'react';
import { Form, Button as AntdButton } from 'antd';
// Types
import { ButtonPropTypes } from './Button.types';

const Button: FC<ButtonPropTypes> = (props) => {
    const { children, ...antButtonProps} = props;

    return (
        <Form.Item>
            <AntdButton
                {...antButtonProps}
            >
                { children}
            </AntdButton>
        </Form.Item>
    );
};
export default Button;