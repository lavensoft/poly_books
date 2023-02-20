import Styles from './Styles.module.scss';

function DetailInfo({ rating, reviewCount, category, pages, releaseDate, language}){
    return(
    <div className={`${Styles.info}`}>
        {/*  */}
        <div className="rating m-5">
            <div>
                <p>{rating} <i></i></p>
            </div>

            <div>
                <p>{reviewCount} review</p>
            </div>
        </div>
        {/*  */}
        <div className="Category m-5">
            <div>
                <i></i>
            </div>

            <div>
                <p>{category}</p>
            </div>
        </div>
        {/*  */}
        <div className="PageCount m-5">
            <div>
                <p>{pages}</p>
            </div>
            
            <div>
                <p>Pages</p>
            </div>
        </div>
        {/*  */}
       

           
    </div>
    )
}

export default DetailInfo;