import {DetailedHTMLProps, HTMLAttributes, ReactNode, TextareaHTMLAttributes} from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode;
    size?: "S" | "M" | "L";
}