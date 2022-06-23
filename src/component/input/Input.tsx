
import './Input.css';
import {FormEvent, useRef} from "react";
export default function Input(){
    const refInputContainer = useRef(null);
    function addNote(e:FormEvent){
        e.preventDefault();
        console.log('add note');
        (refInputContainer.current! as HTMLInputElement).value='';
        (refInputContainer.current! as HTMLInputElement).focus();
    }

    return(
        <form className="Input d-flex flex-row justify-content-center gap-3 p-3" onSubmit={addNote}>

                <input ref={refInputContainer} className="form-control" type="text"/>
                <button className="btn btn-primary" style={{width:'120px'}} onClick={addNote}>Add Note+</button>


        </form>
    )
}