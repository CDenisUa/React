import { ErrorMessage } from '@/components';
// Core
import { ReactNode } from "react";
// Types
import { AlertProps } from "antd";

export interface ErrorMessagePropTypes {
    message?: AlertProps["message"];
};