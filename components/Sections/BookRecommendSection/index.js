import Title from "@components/Title";
import icons from 'bootstrap-icons/icons/arrow-right.svg';
import Image from "next/image";
const remcommend = () => {
    return (
        <div>
            <div className={`d-inline-block`}>
                <h3>More by Sarah Rees Brennan
                    <button className={`btn btn-default`}>
                        <Image src={icons} alt="" width={30} />
                    </button>
                </h3>
            </div>
            <div>
                book section
            </div>
        </div>
    )
}
export default remcommend;