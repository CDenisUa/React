// Core
import { FC } from 'react';
import { Layout as AntLayout } from 'antd';
// Styles
import styles from './Layout.module.css';
// Types
import { LayoutPropTypes} from './Layout.types';
// Components
import Header from '../header';

const Layout: FC<LayoutPropTypes> = ({ children }) => {
    return (
        <div className={styles['main']}>
            <Header />
            <AntLayout.Content>
                { children }
            </AntLayout.Content>
        </div>
    );
};

export default Layout;