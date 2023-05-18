// Core
import { FC } from 'react';
import { Alert } from 'antd';
// Types
import { ErrorMessagePropTypes } from './ErrorMessage.types';

const ErrorMessage: FC<ErrorMessagePropTypes> = ({ message }) => {
    if(!message) return null;

    return <Alert message={message} type='error' />;
};

export default ErrorMessage;