import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Dates.module.css';
import { DatesProps } from './Dates.props';
import addDays from 'date-fns/addDays';
import cn from 'classnames';

export const Dates = ({ date, setDate }: DatesProps): JSX.Element => {
    const [dateArray, setDateArray] = useState<JSX.Element[]>(new Array(7).fill(<></>));
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    useEffect(() => {
        constructDates(date);
    }, [date]);

    const constructDates = (date: Date) => {
        const updatedArray = dateArray.map((d: JSX.Element, i: number) => {
            let dt: Date = addDays(date, i);
            return (
                <>
                    <div className={styles.dayLetter}>{days[i]}</div>
                    <button className={cn(styles.dayButton, {
                        [styles.active]: dt.toDateString() == new Date().toDateString()
                    })}>{dt.getDate()} </button>
                </>
            );
        });
        setDateArray(updatedArray);
    };

    const nextWeek = () => {
        let d: Date = addDays(date, 7);
        setDate(d);
    }

    const earlierWeek = () => {
        let d: Date = addDays(date, -7);
        setDate(d);
    }

    return (
        <div className={styles.wrapper}>
        <div className={styles.menu}>
            <div className={styles.dates}>{dateArray.map((d: JSX.Element, i:number) => <div className={styles.day}>{d}</div>)}</div>
            <button className={styles.arrowButton1} onClick={earlierWeek}>{'<'}</button>
            <div className={styles.monthYearDate}>{date.toDateString().split(' ')[1]} {date.toDateString().split(' ')[3]}</div>
            <button className={styles.arrowButton2} onClick={nextWeek}>{'>'}</button>
        </div>
        </div>
    );
};