
import './Input.css';
import {useRef} from "react";
export default function Input(){
    const refInputContainer = useRef(null);
    function addNote(){
        console.log('add note');
        (refInputContainer.current! as HTMLInputElement).focus();
    }

    return(
        <div className="Input d-flex flex-row justify-content-center gap-3 p-3">
            <input ref={refInputContainer} className="form-control" type="text"/>
            <button className="btn btn-primary" style={{width:'120px'}} onClick={addNote}>Add Note+</button>

        </div>
    )
}