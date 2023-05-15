// Core
import { FC } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Form, Space, Typography } from "antd";
// Styles
import styles from "./Register.module.css";
// Components
import { Layout, Header, Input, PasswordInput, Button } from "@/components";
import { Paths } from "@/router";

const Register: FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <Row align="middle" justify="center">
          <Card title="Log in" style={{ width: "30rem" }}>
            <Form onFinish={() => null}>
              <Input name="name" placeholder="Name" />
              <Input type="email" name="email" placeholder="Email" />
              <PasswordInput name="password" placeholder="Password" />
              <PasswordInput
                name="confirm-password"
                placeholder="Repeat the password"
              />
              <Row  justify='space-between' align="middle">
                <Button type="primary">
                    Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Registration
                </Button>
              </Row>
            </Form>
          </Card>
        </Row>
      </Layout>
    </>
  );
};

export default Register;
