import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';

export const Footer = ({ isClicked = false }: FooterProps): JSX.Element => {
    
    return (
        <div className={styles.footer}>
            <div className={styles.today}>Today</div>
            <div className={cn(styles.delete, {
                [styles.visible]: isClicked
            })}>Delete</div>
        </div>
    );
};