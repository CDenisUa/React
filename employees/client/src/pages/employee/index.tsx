// Core
import { FC, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Descriptions, Divider, Modal, Space, Spin } from 'antd';
import { Paths } from '@/router';
// Images
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
// Redux
import { useGetEmployeeQuery, useRemoveEmployeeMutation } from '@/redux/services/employees/employees';
import { selectUser } from '@/redux/slice/auth/authSlice.selectors';
// Components
import { Button, ErrorMessage, Layout } from '@/components';
import { isErrorMessage } from '@/utils/isErrorMessage';

const Employee: FC = () => {
    const navigation = useNavigate();
    const params = useParams<Record<string, string | undefined>>();
    const { data, isLoading} = useGetEmployeeQuery(params.id || '');
    const [ removeEmployee ] = useRemoveEmployeeMutation();
    const user = useSelector(selectUser);

    const [error, setError] = useState<string>('');
    const [ isModalOpen, setIsModalOpen] = useState<boolean>(false);

    if(isLoading) return <Spin />
    if(!data) return <Navigate to='/' />

    const showModal = () => setIsModalOpen(true);

    const hideModal = () => setIsModalOpen(false);

    const deleteUserHandle = async () => {
        hideModal();

        try {
            await removeEmployee(data.id).unwrap();
            navigation(`${Paths.status}/deleted`);
        } catch (error) {
            const maybeError = isErrorMessage(error);
            if(maybeError) {
                setError(error.data.message)
            } else {
                setError('Unknown error!')
            }
        }
    }

    return (
        <Layout>
            <Descriptions title='Employee information' bordered>
                <Descriptions.Item label='Name'>
                    {`${data.firstName} ${data.lastName}`}
                </Descriptions.Item>
                <Descriptions.Item label='Age'>
                    {`${data.age}`}
                </Descriptions.Item>
                <Descriptions.Item label='Address'>
                    {`${data.address}`}
                </Descriptions.Item>
            </Descriptions>
            {
                user?.id === data.userId &&
                    <>
                        <Divider orientation='left'>Action</Divider>
                        <Space>
                            <Link to={`/employee/edit/${data.id}`}>
                                <Button
                                    shape='round'
                                    type='default'
                                    icon={<EditOutlined />}
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                shape='round'
                                onClick={showModal}
                                icon={<DeleteOutlined />}
                                danger 
                            >
                                Delete
                            </Button>
                        </Space>
                    </>
            }
            <ErrorMessage message={ error } />
            <Modal
                title='Confirm Removal'
                open={isModalOpen}
                onOk={deleteUserHandle}
                onCancel={hideModal}
                okText='Confirm'
                cancelText='Cancel'
            >
                Do you really want to remove an employee from the table?
            </Modal>
        </Layout>
    );
};

export default Employee;