// Core
import { FC } from "react";
import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "@/router";
//  Styles
import styles from "./Header.module.css";
// Images
import { TeamOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
// Components
import { Button } from "@/components";

const Header: FC = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.icon} />
        <Link to={Paths.home}>
          <Button type="ghost">
            <Typography.Title level={1}>Employees</Typography.Title>
          </Button>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.login}>
          <Button type="ghost" icon={ <UserOutlined /> } >Register</Button>
        </Link>
        <Link to={Paths.login}>
          <Button type="ghost" icon={ <LoginOutlined /> }>Log In</Button>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
