import { useState } from "react";
import Styles from "./style.module.scss";

const data = [{
    id: 1,
    text: "Devpulse"
}, {
    id: 2,
    text: "Linklinks"
}, {
    id: 3,
    text: "Centizu"
}, {
    "id": 4,
    "text": "Dynabox"
}, {
    "id": 5,
    "text": "Avaveo"
}, {
    "id": 6,
    "text": "Demivee"
}, {
    "id": 7,
    "text": "Jayo"
}, {
    "id": 8,
    "text": "Blognation"
}, {
    "id": 9,
    "text": "Podcat"
}, {
    "id": 10,
    "text": "Layo"
}] ;


function Prop({ visible=true, onClose=()=>{}}){

    const [inputText, setInputText] = useState([
       
    ]);
    let inputHandler = (e) => {
    //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (inputText.match === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(inputText)
        }
    });



    return (
        <div className={`container  ${Styles.container}`}>
            
            <div className="nav"> 
                <p>Search</p>
                <div className="d-flex justify-content-right">
                    <button  className={`butclose  ${Styles.butclose}`} onClick={onClose}>X</button>
                </div>
               
            </div><hr/>

            <div className=""> 
                <input onChange={inputHandler}></input>
                <div className="d-flex pt-3  justify-content-between">
                    <p className="">
                        Results in books
                    </p>
                    <button className={`  btn btn-outline-primary  ${Styles.butSearch}`}>Search the web</button>
                </div>
            </div>

            <div className="">
                <ul>
                    {filteredData.map((item) => (
                        <div className="pt-3">
                            <li key={item.id}>{item.id}</li>
                            <li>{item.text}</li>
                        </div>
                        
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Prop;