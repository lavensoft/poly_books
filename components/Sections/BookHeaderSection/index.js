import Button from '@components/Button';
import BadgeButton from '@components/Button/BadgeButton';
import DetailInfo from '@components/DetailInfo';
import Title from '@components/Title';

import Image from 'next/image';
import style from './index.module.scss';
const BookHeaderSection = ({ data }) => {
    return (
        <div className={`row ${style.head}`}>
            <div className={`col-5 ${style.virtual}`}></div>
            {/* background head  */}
            <div className={`col-7`}>
                <img src="https://play-lh.googleusercontent.com/proxy/RjreTOBQt6viHCMkYcsIVqb6mNf-faWDSAEaDi1F4MZbsc5I4YseHPm8xinZ4Kgun5Kzu45T8pU1YxekHPSHi-aQyU4ogYhyESPGrtWniWF9Pv47wpbiEcg=s1920-w1920-h1080" className={`${style.bg}`} alt="BackGround" />
                <div className={`${style.temp}`}></div>
            </div>
            {/* article head  */}
            <div className={`text-white ${style.body}`}>
                <Image src={data.photo} width={200} height={300} alt="Image" />
                <div className={`${style.detail}`}>
                    <Title className={`mb-2 text-white`} text={`${data.title}`} />
                    <span>Tác giả</span>
                    <div className={style.sectionInfo}>
                        <DetailInfo rating={data.rate} reviewCount={data.reviews} category={"Comics & Graphic Novels"} pages={data.pages} releaseDate={data.time_published} language={data.language}/>
                        <div>
                            {/* <Button>{data.new_price} đ</Button>
                            <Button secondary={false}>{data.new_price} đ</Button> */}
                            <BadgeButton>{data.new_price} đ</BadgeButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BookHeaderSection;