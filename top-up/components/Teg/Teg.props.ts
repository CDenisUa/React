import {DetailedHTMLProps, HTMLAttributes, ReactNode, TextareaHTMLAttributes} from "react";

export interface TegProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
    size?: "M" | "L";
    color?: "ghost" | "grey" | "red" | "primary" | "green";
    href?: string;
}