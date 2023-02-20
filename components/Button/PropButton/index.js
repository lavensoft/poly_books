import Styles from './Styles.module.scss';

function PropButton({children, styles, className='', onClick=()=>{}}){
    return(
<button onClick={onClick} style={styles} className={` button ${Styles.button} ${className}`}>{children}</button>
    )
}
export default PropButton;