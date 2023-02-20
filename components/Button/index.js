import styles from './styles.module.scss';

export const Button = ({text=false, secondary=true, children}) => {
    return (
        <button className={` ${styles.button} ${secondary ? styles.secondary : ''} ${text ? styles.text : ''}`}>
            {children}
        </button>
    )

}