// Core
import { FC } from 'react';
import { Layout as AntLayout } from 'antd';
// Styles
import styles from './Layout.module.css';
// Types
import { LayoutPropTypes } from './Layout.types';

const Layout: FC<LayoutPropTypes> = ({ children }) => {
    return (
        <div className={styles['main']}>
            <AntLayout.Content>
                { children }
            </AntLayout.Content>
        </div>
    );
};

export default Layout;