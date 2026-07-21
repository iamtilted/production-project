import React, {useState} from 'react';
import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string
}

const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggleCollapse = () => setCollapsed(prev => !prev)

    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
            <button onClick={onToggleCollapse}>TOOGLE</button>
           <div className={cls.switchers}>
               <ThemeSwitcher />
               <LangSwitcher className={cls.lng} />
           </div>
        </div>
    );
};

export default Sidebar;