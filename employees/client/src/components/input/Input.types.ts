// Types
import { InputProps as AntInputProps } from 'antd/lib/input';
import { Rule } from 'antd/lib/form';


export interface InputPropTypes extends Omit<AntInputProps, 'size'> {
    name?: string;
    rules?: Rule[];
    isFocus?: boolean;
}