import React from 'react';
import {classNames} from "shared/lib/helpers/classNames/classNames";
import './Loader.scss'

interface LoaderProps {
    className?: string
}

const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames('loader', {}, [className])}>
        </div>
    );
};

export default Loader;