import './Note.css';
import React from "react";
import {Note as NoteDTO} from "../../dto/Note";

export default function Note({note}:{note:NoteDTO}){

    function deleteNote(){
        console.log("Delete Node");
    }

   return(
       <div className="Note d-flex justify-content-between p-3">
           <h1>{note.text}</h1>
           <img src="/assets/trash-bin.png" style={{width:'60px'}} onClick={deleteNote}/>
       </div>
   )
}