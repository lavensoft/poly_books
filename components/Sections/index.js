import React from 'react';
import { Container } from 'react-bootstrap';
import styles from "./styles.module.scss";
import { BadgeButton } from '@components';


export const Section = ({ children, dark, title, subTitle, badges=[], badgeActive=0, onBadgeClick=()=>{} }) => {
    let badgeEleId = "";

    return (
        <section className={`${styles.section} ${dark ? styles.sectionDark : ""}`}>    
            <Container className={styles.container}>
                {
                    title && (
                        <div className={styles.sectionTitle}>
                            { subTitle && <span className={styles.subTitle}>{ subTitle }</span> }
                            <h4 className={styles.title}>{ title }</h4>
                            
                            { badges.length > 0 && <div className={styles.badgeContainer}>
                                {
                                    badges.map((badge, index) => {
                                        return <BadgeButton 
                                            active={index == badgeActive}
                                            onClick={() => onBadgeClick(index)}
                                            key={`section-title-badge-item-${index}`}
                                        >{ badge }</BadgeButton>
                                    })
                                }
                            </div>
                            }
                        </div>
                    )
                }
                { children }
            </Container>
        </section>
    )
}