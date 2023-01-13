import { Button } from "react-bootstrap";

function CustomButton({children,...props}) {
    return ( 
        <Button {...props}>{children}</Button>
     );
}

export default CustomButton;