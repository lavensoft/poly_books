import Styles from '../styles.module.scss';

function FeatureCard(icon, text){
    return (
        <div className='Feature'>
            <p>{icon}</p><br/>
            <p>{text}</p>
        </div>
    )
}

export default FeatureCard;