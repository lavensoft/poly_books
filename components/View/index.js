import React from 'react';
import styles from "./styles.module.scss";

export const View = ({ children, nav }) => {
    return (
        <div className={styles.view} style={{
            paddingTop: nav ? 63 : 0
        }}>
            { children }
        </div>
    )
}