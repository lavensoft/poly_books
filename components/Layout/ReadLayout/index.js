import  ReadNavbar from "../../Navbar/ReadNavbar";

const read_layout = ({data,children}) => {
     return (
        <div>
            <ReadNavbar/>
            {children}
        </div>
     )
};
export default read_layout;