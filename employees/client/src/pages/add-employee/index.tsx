// Core
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import { Paths } from '@/router';
// Styles
import styles from './AddEmployee.module.css';
// Types
import { Employee } from '@/types';
// Utils
import { isErrorMessage } from '@/utils/isErrorMessage';
// Redux
import { useAddEmployeeMutation } from '@/redux/services/employees/employees';
import { selectUser } from '@/redux/slice/auth/authSlice.selectors';
// Components
import { EmployeeForm, Layout, Header } from '@/components';


const AddEmployee: FC = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    const [ error, setError ] = useState('');
    const [ addEmployee ] = useAddEmployeeMutation();

    const addEmployeeHandle = async ( data: Employee ) => {
        try {
            await addEmployee(data).unwrap();
            navigate(`${Paths.status}/created`)
        } catch (error) {
            const maybeError = isErrorMessage(error);
            if(maybeError) {
                setError(error.data.message);
            }else {
                setError('Unknown error!')
            }
        }
    }

    useEffect(() => {
        if(!user) navigate('/login')
    }, [navigate, user])

    return (
        <Layout>
            <Header />
            <Row 
                align='middle' 
                justify='center'
                className={styles['row']}
            >
                <EmployeeForm 
                    title='Add employee'
                    btnText='Add'
                    onFinish={addEmployeeHandle}
                    error={error}
                />
            </Row>
        </Layout>
    );
};

export default AddEmployee;