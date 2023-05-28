// Core
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Card, Form, Space, Typography } from "antd";
// Styles
import styles from "./Login.module.css";
// Types
import { UserData } from "@/types";
// Redux
import { useLoginMutation } from "@/redux/services/auth/auth";
// Components
import { Layout, Header, Input, PasswordInput, Button, ErrorMessage } from "@/components";
import { Paths } from "@/router";
import { isErrorMessage } from "@/utils/isErrorMessage";

const Login: FC = () => {
  const navigate = useNavigate();
  const [ loginUser, loginUserResult] = useLoginMutation();
  const [ error, setError] = useState('');

  const onLogin = async (data: UserData) => {
    try{
      await loginUser(data).unwrap();
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

  return (
      <Layout>
        <Row
          className={styles["login-container"]}
          align="middle"
          justify="center"
        >
          <Card title="Log in" style={{ width: "30rem" }}>
            <Form onFinish={onLogin}>
              <Input isFocus type="email" name="email" placeholder="Email" />
              <PasswordInput name="password" placeholder="Password" />
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </Form>
            <Space direction="vertical">
              <Typography.Text>
                <span className={styles["register"]}>
                  Don't you have an account?
                </span>
                <Link to={Paths.register}>Register</Link>
              </Typography.Text>
              <ErrorMessage message={ error } />
            </Space>
          </Card>
        </Row>
      </Layout>)
};

export default Login;
