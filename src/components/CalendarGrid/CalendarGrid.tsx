import React, { useState, useRef } from 'react';
import { Footer } from '../Footer/Footer';
import styles from './CalendarGrid.module.css';

export const CalendarGrid = (): JSX.Element => {
    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
    const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

    const changeButtonColor = (i: number) => {
        itemsRef.current.forEach((item) => item!.style.backgroundColor = 'white');
        itemsRef.current[i]!.style.backgroundColor = '#e4ddf6';
        setIsButtonClicked(true);
    };

    const timeElements = (): JSX.Element[] => {
        const arr: JSX.Element[] = [];
        for(let i = 0; i < 24; i++) {
            if(i < 10) {
               arr.push(<div className={styles.time}>{`0${i}:00`}</div>);
            } else {
               arr.push(<div className={styles.time}>{`${i}:00`}</div>);
            }
        }
        return arr;
    };

    const buttonElements = () => {
        const arr: JSX.Element[] = [];
            for(let i = 0; i < 168; i++) {
                arr.push(<div 
                    className={styles.button} 
                    ref={el => itemsRef.current[i] = el} 
                    onClick={() => changeButtonColor(i)}></div>);
            }
        return arr;
    };

    return (
        <>
            <div className={styles.grid}>
                <div className={styles.timeBlock}>
                    {timeElements()}
                </div>
                <div className={styles.buttons} onClick={() => setIsButtonClicked(true)}>
                    {buttonElements()}
                </div>
            </div>
            <Footer isClicked={isButtonClicked} />
        </>
    );
};