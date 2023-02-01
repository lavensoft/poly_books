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
                    <span>sndgasdjgnao</span>
                    <div className={style.sectionInfo}>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BookHeaderSection;