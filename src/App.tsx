import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./component/input/Input";
import Note from "./component/note/Note";

export default class App extends React.Component<any, any> {

    render() {
        return (
            <>
                <Input/>
                <Note/>
                <Note/>
                <Note/>
            </>
        )
    }
}