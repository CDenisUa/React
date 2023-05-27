// Core
import { FC } from "react";
import { Layout, Space, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "@/router";
import { useDispatch, useSelector } from "react-redux";
//  Styles
import styles from "./Header.module.css";
// Images
import { TeamOutlined, UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
// Redux 
import { selectUser } from "@/redux/slice/auth/authSlice.selectors";
import { logout } from "@/redux/slice/auth/authSlice";
// Components
import { Button } from "@/components";

const Header: FC = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = () => {
    navigate('/login');
  }

  const onLogoutLogin = () =>{ 
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  }

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
        <Link to={Paths.register}>
          <Button className={styles['button-link']} type="ghost" icon={ <UserOutlined /> } >Register</Button>
        </Link>
        {
          user 
            ? 
              <Link to={Paths.login}>
                <Button 
                  className={styles['button-link']} 
                  type="ghost" 
                  icon={ <LogoutOutlined /> }
                  onClick={onLogoutLogin}
                >
                  Log Out
                </Button>
              </Link>
            :
              <Link to={Paths.login}>
                <Button 
                  className={styles['button-link']} 
                  type="ghost" 
                  icon={ <LoginOutlined /> }
                  onClick={onLogin}
                >
                  Log In
                </Button>
              </Link>
        }
      </Space>
    </Layout.Header>
  );
};

export default Header;
