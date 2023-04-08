// Core
import { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => (
    <div>{children}</div>
);

export default Container;
