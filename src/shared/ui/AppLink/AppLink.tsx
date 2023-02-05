import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import s from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    OUTLINED = 'outlined'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        theme = AppLinkTheme.INVERTED,
        children,
        ...otherProps
    } = props

    return (
        <Link to={to}
              className={classNames(s.AppLink, {}, [className, s[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    );
};