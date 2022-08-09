import React from 'react';
import styles from './Header.module.css';

export const Header = (): JSX.Element => {
    const enterWindow = () => {
        prompt('Enter event time:\nYYYY-MM-DD HH:mm:ss');
    }

    return (
        <header className={styles.header}>
            <span>Interview Calendar</span>
            <button className={styles.addButton} onClick={enterWindow}>+</button>
        </header>
    );
};