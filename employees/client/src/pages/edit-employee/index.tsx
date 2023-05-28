// Core
import { Row, Spin } from "antd";
import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Paths } from "@/router";
// Types
import { Employee } from "@/types";
// Utils
import { isErrorMessage } from "@/utils/isErrorMessage";
// Redux
import {
  useEditEmployeeMutation,
  useGetEmployeeQuery,
} from "@/redux/services/employees/employees";
// Components
import { EmployeeForm, Layout } from "@/components";

const EditEmployee: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading } = useGetEmployeeQuery(params.id || "");
  const [editEmployee] = useEditEmployeeMutation();

  const [error, setError] = useState<string>("");

  if (isLoading) return <Spin />;

  const editUserHandle = async (employee: Employee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee,
      };
      
      await editEmployee(editedEmployee).unwrap();
      navigate(`${Paths.status}/updated`);

    } catch (error) {
        const maybeError = isErrorMessage(error);
        if (maybeError) {
            setError(error.data.message);
        } else {
            setError("Unknown error!");
        }
    }
  };

  const cancelEditHandle = () => navigate('/');

  return (
    <Layout>
      <Row align="middle" justify="center">
        <EmployeeForm
          title="Edit employee"
          btnText="Edit"
          error={error}
          employee={data}
          onFinish={editUserHandle}
          onCancel={cancelEditHandle}
        />
      </Row>
    </Layout>
  );
};

export default EditEmployee;
