import {TextProps} from './Text.props';
import cn from 'classnames';
import styles from './Text.module.css';

export const Text = ({children, size='M',className,...props}:TextProps):JSX.Element => {
    return (
        <p
            className={cn(styles.p,className,{
                [styles.S]: size === 'S',
                [styles.M]: size === 'M',
                [styles.L]: size === 'L',
            })}
            {...props}
        >
            {children}
        </p>
    )
}