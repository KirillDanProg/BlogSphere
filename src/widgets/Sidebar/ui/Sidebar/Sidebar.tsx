import {FC, Suspense, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ThemeSwitcher} from "shared/ui";
import s from "./Sidebar.module.scss"
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {

    const [collapsed, setCollapsed] = useState(true)
    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
            <div className={classNames(s.Sidebar, {[s.collapsed]: collapsed})}>
                <Button onClick={toggleSidebar}>
                    Toggle
                </Button>
                <div className={s.switchers}>
                    <ThemeSwitcher/>
                    <LangSwitcher/>
                </div>
            </div>
    );
};