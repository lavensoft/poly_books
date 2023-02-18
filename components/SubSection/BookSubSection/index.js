import React from "react";
import styles from "./styles.module.scss";
import { Row, Col } from "react-bootstrap";

export const BookSubSection = () => {
    return (
        <div className={styles.bookSubSection}>
            <Row>
                <Col md={4} className={styles.information}>
                    <h2 className={styles.title}>iPhone 14 Pro</h2>
                    <p className={styles.description}>Pro. Mẫu iPhone mới nhất đến từ nhà Apple được ra mắt vào năm 2022.</p>

                    <a href="#">DAT NGAY</a>
                </Col>

                <Col md={8} className={styles.imageContainer}>
                    <img className={styles.image} src="https://www.apple.com/v/home/ay/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_mediumtall_2x.jpg"></img>
                </Col>
            </Row>
        </div>
    )
}