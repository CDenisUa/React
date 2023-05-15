// Core
import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Form, Typography } from "antd";
// Types
import type { InputRef } from "antd";
// Styles
import styles from "./Register.module.css";
// Components
import { Layout, Header, Input, PasswordInput, Button } from "@/components";
import { Paths } from "@/router";

const Register: FC = () => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    inputRef.current?.focus({
      cursor: "start",
    });
  });
  return (
    <>
      <Header />
      <Layout>
        <Row align="middle" justify="center">
          <Card title="Register" style={{ width: "30rem" }}>
            <Form onFinish={() => null}>
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
          </Card>
        </Row>
      </Layout>
    </>
  );
};

export default Register;
