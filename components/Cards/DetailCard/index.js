import styles from "./styles.module.scss";

function DetailCard({img,title,price}){
    return (
        <div className={`${styles.detailCard} container mx-3 my-3 d-flex`} style={{width:"100%"}}>
            <img className={`${styles.image} card-img-top`} src={img} alt="Card image"></img>
            <div className={`${styles.body} card-body`}>
                <h4 className={`${styles.title} card-title`}>{title}</h4>
                <p className={`${styles.text} card-text`}>{price}</p>
            
            </div>
        </div>
    )
}

export default DetailCard;