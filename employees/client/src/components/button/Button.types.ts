// Types
import { ButtonProps } from "antd/lib/button";
import { ReactNode } from "react";

export interface ButtonPropTypes extends ButtonProps {
    children: ReactNode;
}