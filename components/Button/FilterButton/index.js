import style from './index.module.scss';
const filter_button = ({icon}) =>{
    return (
        <button className={`${style.filter_button}`}>{icon}</button>
    )
}
export default filter_button;