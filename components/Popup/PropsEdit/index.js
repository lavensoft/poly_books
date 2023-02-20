import Styles from './styles.module.scss';
import PropButton from '@components/Button/PropButton/index';
import { IconName } from "react-icons";

import { useState } from "react";

function PropsEdit({visible=false, onchange=()=>{}, onclose=()=>{}}){
    const [editProp, setEditProp] = useState({
        
            view: 'Flowing Text',
            font: 'Original',
            fontSize:100,
            lineHeight:100,
            align:'right'
           
        
    });


    let setdata = (key, value)=> {
        let editData = {...editProp};

        editData[key] = value;

        console.log(editData);

        setEditProp(editData);
    };

    

    return (
        <div className={`container ${Styles.container}`}>
             <div className="d-flex"> 
                <p style={{flex:1}}>Display Options</p>
                <div className=" justify-content-right">
                    <PropButton>X</PropButton>
                </div>              
            </div><hr/>

           

            <div>
                <p>View</p>
                <select name="cars" id="cars" className={`editSelect form-select ${Styles.editSelect}`} >
                    <option value="volvo" onClick={()=>setdata("View",'Flowing Text')}>Flowing Text</option>
                    <option value="saab"onClick={()=>setdata("View",'Line Break')} >Line Break</option>
                 
                </select>
            
                <p className="pt-4">Font</p>
                <select name="cars" id="cars" className='form-select'>
                    <option value="volvo" onClick={()=>setdata("Font",'Original')}>Original</option>
                    <option value="saab" onClick={()=>setdata("Font",'Volvo')}>Arial</option>
                    <option value="mercedes">Time New Roman</option>
                    <option value="audi">Georgia</option>
                </select>
            </div>

            <h4 className='pt-5'>Font size</h4>
            <div className="d-flex justify-content-around pt-3">
                <PropButton onClick={()=>setdata('fontSize',editProp.fontSize-10)} >T</PropButton>
                <PropButton>{editProp.fontSize}%</PropButton>
                <PropButton onClick={()=>setdata('fontSize',editProp.fontSize+10)}>T</PropButton>
            </div>

            <h4 className='pt-5'>Line Height</h4>
            <div className="d-flex justify-content-around pt-3">
                <PropButton onClick={()=>setdata('LineHeight',editProp.lineHeight-10)}>T</PropButton>
                <PropButton>{editProp.lineHeight}%</PropButton>
                <PropButton onClick={()=>setdata('LineHeight',editProp.lineHeight+10)}>T</PropButton>
            </div>


            <h4 className='pt-5'>Justify</h4>
            <div className="d-flex justify-content-around pt-3">
                <PropButton onClick={() => setdata("align", "left")}>Left</PropButton>
                <PropButton onClick={() => setdata("align", "center")}>Center</PropButton>
                <PropButton onClick={() => setdata("align", "right")}>Right</PropButton>
            </div>


            <h4 className='pt-5'>Page Layout</h4>
            <div className="d-flex justify-content-around pt-3">
                <PropButton onClick={() => setdata("align", "left")}>T</PropButton>
                <PropButton>Muti Page</PropButton>
                <PropButton  onClick={() => setdata("align", "right")}>One Page</PropButton>
            </div>
            
        </div>

    )
}
export default PropsEdit;