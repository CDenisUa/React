// Core
import { Button, Result, Row } from 'antd';
import { FC, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// Styles
import styles from './Status.module.css';
// Constants
import { Statuses } from './Status.constants';

const Status: FC = () => {
    const navigator = useNavigate();
    const { status } = useParams();

    useEffect(() => {
        setTimeout(() => {
            navigator('/');
        },2000);
    }, [])

    return (
        <Row 
            align='middle' 
            justify='center' 
            className={styles['row']}
        >
            <Result
                status={status ? 'success' : '404'}
                title={status ? Statuses[status]: 'Not found!'}
                extra={
                    <Button key='dashboard'>
                        <Link to='/'>Go home</Link>
                    </Button>
                }
            >
            </Result>
        </Row>
    );
};

export default Status;