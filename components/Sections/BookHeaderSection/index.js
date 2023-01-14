import Title from '@components/Title';
import style from './index.module.scss';
const BookHeaderSection = ()=> {
    return ( 
        <div className={style.header}>
            <img src="" className={style.bg} alt="BackGround" />
            <div className={style.body}>
                <img src="" alt="Image" />
                <Title text={"The Bane Chronicles"}/>
                <span>sndgasdjgnao</span>
                <div className={style.sectionInfo}>

                </div>
            </div>
        </div>
     );
}

export default BookHeaderSection;