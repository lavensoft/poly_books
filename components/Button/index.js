import styles from './styles.module.scss';

export const Button = ({text=false, secondary=false, children}) => {
    return (
        <button className={`${styles.button} ${secondary ? styles.secondary : ''} ${text ? styles.secondary : ''}`}>
            {children}
        </button>
    )

}