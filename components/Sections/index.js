import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "./styles.module.scss";

export const Section = ({ children, dark, title, subTitle }) => {
    return (
        <section className={`${styles.section} ${dark ? styles.sectionDark : ""}`}>
            <Container className={styles.container}>
                {
                    title && (
                        <div className={styles.sectionTitle}>
                            { subTitle && <span className={styles.subTitle}>{ subTitle }</span> }
                            <h4 className={styles.title}>{ title }</h4>
                        </div>
                    )
                }
                { children }
            </Container>
        </section>
    )
}