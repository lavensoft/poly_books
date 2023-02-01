import { Button } from "react-bootstrap";

function BadgeButton({children}){
    return (
        <Button className="rounded-5" >{children}</Button>

    )
}

export default BadgeButton;