// Core
import { FC } from 'react';
import { Spin } from 'antd';
// Styles
import styles from './Auth.module.css';
// Types
import { AuthPropTypes } from './Auth.types';
// Redux
import { useCurrentQuery } from '@/redux/services/auth/auth';

const Auth: FC<AuthPropTypes> = ({ children }) => {
    const { isLoading } = useCurrentQuery();

    if(isLoading) { 
        return <Spin wrapperClassName={styles['preloader']}> Loading... </Spin>
    }

    return <> { children } </>;
};

export default Auth;