// Core
import { FC } from 'react';
import { Form, Input } from 'antd';
// Types
import { PasswordInputPropTypes } from './PasswordInput.types';

const PasswordInput: FC<PasswordInputPropTypes> = (props) => {
    const { name, placeholder, dependencies } = props;

    return (
        <Form.Item
            name={name}
            dependencies={ dependencies }
            hasFeedback
            rules={[
                {
                  required: true,
                  message: 'The field is required.',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value ) {
                      return Promise.resolve();
                    }
                    if (name === 'confirm-password') {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('Passwords must match!')
                      );
                    } else {
                      if (value.length < 6) {
                        return Promise.reject(
                          new Error('Password must be longer than 6 characters!')
                        );
                      }
                      return Promise.resolve();
                    }
                  },
                }),
              ]}
        >
            <Input.Password placeholder={placeholder} size='large' />
        </Form.Item>
    )
};

export default PasswordInput;