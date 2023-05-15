// Core
import { FC } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Form, Space, Typography } from "antd";
// Styles
import styles from "./Login.module.css";
// Components
import { Layout, Header, Input, PasswordInput, Button } from "@/components";
import { Paths } from "@/router";

const Login: FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <Row
          className={styles["login-container"]}
          align="middle"
          justify="center"
        >
          <Card title="Log in" style={{ width: "30rem" }}>
            <Form onFinish={() => null}>
              <Input type="email" name="email" placeholder="Email" />
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
            </Space>
          </Card>
        </Row>
      </Layout>
    </>
  );
};

export default Login;
