// Core
import { FC, useEffect } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Paths } from '@/router';
import { useSelector } from 'react-redux';
// Redux
import { useGetAllEmployeesQuery } from '@/redux/services/employees/employees';
import { selectUser } from '@/redux/slice/auth/authSlice.selectors';
// Constants
import { columns } from './Employees.constants';
// Components
import { Header, Button, Layout  } from '@/components';
import { useNavigate } from 'react-router-dom';

const Employees: FC = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const { data, isLoading } = useGetAllEmployeesQuery();

    const AddEmployeeHandle = () => {

    }

    useEffect(() => {
        if(!user) navigate('/login')
    },[navigate, user])
    
    return (
        <Layout>
            <Header />
            <Button 
                type='primary'
                icon={ <PlusCircleOutlined /> }
                onClick={AddEmployeeHandle}
            > 
                Add Employee 
            </Button>
            <Table
                loading={ isLoading }
                dataSource={ data }
                pagination={ false}
                columns={columns}
                rowKey={(record) => record.id}
                onRow={(record) => {
                    return {
                        onClick: () => navigate(`${Paths.employee}/${record.id}`)
                    }
                }}
            >
                
            </Table>
        </Layout>
    )
};

export default Employees;