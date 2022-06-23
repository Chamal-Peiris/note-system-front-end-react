import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./component/input/Input";
import Note from "./component/note/Note";

export default class App extends React.Component<any, any> {

    render() {
        return (
            <>
                <h1 className="text-center mt-3">Simple Note Taking React App</h1>
                <Input/>
                <Note value={10}/>
                <Note value={30}/>
                <Note value={100}/>
            </>
        )
    }


}