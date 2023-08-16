import React from 'react';
import clsx from 'clsx';
import styles from './TypewriterText.module.css'

interface Props {
    children?: React.ReactNode;
    className?: string;
};

/**
 * Typewriter text effect component.
 * TODO: Make this more customisable for future use!
 */

const TypewriterText: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={styles['writer']}>
            <div className={clsx(styles['writer-text'], className)}>{children}</div>
        </div>
    );
};

export default TypewriterText;