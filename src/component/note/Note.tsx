import './Note.css';
import React from "react";
import {Note as NoteDTO} from "../../dto/Note";

export default function Note({note,onDelete}:{note:NoteDTO,onDelete:(id:number)=>void}){

    function deleteNote(){
      onDelete(note.id!);
    }

   return(
       <div className="Note d-flex justify-content-between p-3">
           <h1>{note.text}</h1>
           <img src="/assets/trash-bin.png" style={{width:'60px'}} onClick={deleteNote}/>
       </div>
   )
}