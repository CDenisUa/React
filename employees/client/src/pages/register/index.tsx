// Core
import { FC, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Card, Form, Typography } from "antd";
import { useSelector } from "react-redux";
import { Paths } from "@/router";
// Styles
import styles from "./Register.module.css";
// Types
import type { InputRef } from "antd";
// Utils
import { isErrorMessage } from "@/utils/isErrorMessage";
// Redux
import { selectUser } from "@/redux/slice/auth/authSlice.selectors";
import { useRegisterMutation } from "@/redux/services/auth/auth";
// Components
import { Layout, Input, PasswordInput, Button, ErrorMessage } from "@/components";
import { User } from "@/redux/slice/auth/authSlice.types";

const Register: FC = () => {
  const inputRef = useRef<InputRef>(null);
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const [registerUser] = useRegisterMutation();

  const [ error, setError] = useState('');
  
  const registerHandle = async (data: Omit<User, "id"> & { confirmPassword: string}) => {
    try {
      await registerUser(data).unwrap();
      navigate('/');
    }catch(error) {
      const maybeError = isErrorMessage(error);
      if(maybeError) {
        setError(error.data.message);
      }else {
        setError('Unknown error!');
      }
    }
  }

  useEffect(() => {
    inputRef.current?.focus({
      cursor: "start",
    });
  });
  return (
      <Layout>
        <Row align="middle" justify="center">
          <Card title="Register" style={{ width: "30rem" }}>
            <Form onFinish={registerHandle}>
              <Input isFocus name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Email" />
              <PasswordInput name="password" placeholder="Password" />
              <PasswordInput
                name="confirm-password"
                placeholder="Confirm password"
              />
              <Button type="primary" htmlType="submit">
                Registration
              </Button>
            </Form>
            <Typography.Text>
              <span className={styles["register"]}>
                Have you already registered?
              </span>
              <Link to={Paths.login}>Log In</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Card>
        </Row>
      </Layout> 
  );
};

export default Register;
