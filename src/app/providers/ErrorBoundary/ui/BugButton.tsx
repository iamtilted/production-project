import React, {useEffect, useState} from 'react';
import {classNames} from "shared/lib/helpers/classNames/classNames";
import cls from './BugButton.module.scss'
import Button from "shared/ui/Button/Button";
import {Simulate} from "react-dom/test-utils";
import {ifError} from "node:assert";
import {useTranslation} from "react-i18next";


interface BugButtonProps {
    className?: string
}

const BugButton = ({className}: BugButtonProps) => {
const {t} = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    }

    useEffect(() => {
        if(error) {
            throw new Error();
        }
    }, [error]);


    return (
        <Button
            onClick={onThrow}>
            {t('throw error')}
        </Button>
    );
};

export default BugButton;