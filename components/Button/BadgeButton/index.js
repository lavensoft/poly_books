import { Button } from "react-bootstrap";
import styles from "./styles.module.scss";

function BadgeButton({children, active=false, onClick=() => {}}){
    return (
        <button 
            onClick={onClick} 
            className={`${styles.badgeButton} ${active ? styles.active : ''}`}
        >{children}</button>
    )
}

export default BadgeButton;