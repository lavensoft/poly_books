import { FilterButton } from "@components";
import Image from "next/image";
import {BsArrowsFullscreen, BsBookmark, BsFillQuestionCircleFill, BsSearch} from 'react-icons/bs';
const read_nabar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light" style={{height:"15vh"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={"../../../public/favicon.ico"} width={30} height={30}/>Capuchino</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* <div className="collapse navbar-collapse" id="collapsibleNavId"> */}
                    <div className="d-flex my-2 justify-content-end">
                       <FilterButton icon={<BsSearch/>}/>
                       <FilterButton icon={<BsArrowsFullscreen/>}/>
                       <FilterButton icon={<BsBookmark/>}/>
                       <FilterButton icon={<BsFillQuestionCircleFill/>}/>

                    </div>
                {/* </div> */}
            </div>
        </nav>

    )
};
export default read_nabar;