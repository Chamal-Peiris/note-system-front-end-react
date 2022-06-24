import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./component/input/Input";
import Note from "./component/note/Note";
import {Note as NoteDTO} from './dto/Note'

export default class App extends React.Component<any, { notes:Array<NoteDTO>}> {


    constructor(props:any) {
        super(props);
        this.state={notes:[]}
    }

    componentDidMount() {
        this.loadAllNotes();
    }

    async loadAllNotes() {
        const respone = await fetch('http://localhost:8080/notes/api/v1/users/448333d0-66df-46b5-b37d-b85ec4af84f7/notes');


        this.setState({
            notes:await respone.json()
        });

    }
    async deleteNote(id:number){
        const  response=await fetch(`http://localhost:8080/notes/api/v1/users/448333d0-66df-46b5-b37d-b85ec4af84f7/notes/${id}`,
            {
                method:'DELETE'
            });
        if(response.status===204){

         //  this.state.notes.indexOf()
        }
    }

   async addNote(text:string){
      //insert the note to db


        const response=await fetch('http://localhost:8080/notes/api/v1/users/448333d0-66df-46b5-b37d-b85ec4af84f7/notes',
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(  new NoteDTO(null,text,"448333d0-66df-46b5-b37d-b85ec4af84f7") )
            });
        if(response.status===201){
            const newlyAddedNote=await response.json();
            this.setState({
                notes: [...this.state.notes, newlyAddedNote]
            });
        }
    }



    render() {
        return (
            <>
                <h1 className="text-center mt-3">Simple Note Taking React App</h1>
                <Input onAdd={this.addNote}/>
                {this.state.notes.map(note=><Note key={note.id} note={note} onDelete={this.deleteNote} />)}
          </>
        )
    }


}