import {TegProps} from './Teg.props';
import cn from 'classnames';
import styles from './Teg.module.css';

export const Teg = ({children, size='M', href, color, className,...props}:TegProps):JSX.Element => {
    return (
        <div
            className={cn(styles.tag,className,{
                [styles.M]: size === 'M',
                [styles.L]: size === 'L',
                [styles.red]: color === 'red',
                [styles.primary]: color === 'primary',
                [styles.green]: color === 'green',
                [styles.grey]: color === 'grey',
                [styles.ghost]: color === 'ghost',
            })}
            {...props}
        >{
            href ? <a href={href}>{children}</a> : <>{children}</>
        }
        </div>
    )
}