// Core
import { FC } from 'react';
import { Card, Form, Space } from 'antd';
// Styles
import styles from './EmployeeForm.module.css';
// Types
import { EmployeePropTypes } from './EmployeeForm.types';
import { Employee } from '@/types';
// Components
import { ErrorMessage, Input, Button } from '@/components';

const EmployeeForm: FC<EmployeePropTypes<Employee>> = (props) => {
    const {
        onFinish,
        title,
        btnText,
        error,
        employee
     } = props;

    return (
        <Card 
            title={title}
            className={styles['card']}
        >
            <Form
                name='employee-form'
                onFinish={onFinish}
                initialValues={employee}
            >
                <Input
                     type='text' 
                     name='firstName'
                     placeholder='Name'
                />
                <Input
                     type='text' 
                     name='lastName'
                     placeholder='Last name'
                />
                <Input
                     type='number' 
                     name='age'
                     placeholder='Age'
                />
                <Input
                     type='text' 
                     name='address'
                     placeholder='Address'
                />
                <Space>
                    <ErrorMessage message={error} />
                    <Button htmlType='submit'>
                        {btnText}
                    </Button>
                </Space>
            </Form>
        </Card> 
    );
};

export default EmployeeForm;