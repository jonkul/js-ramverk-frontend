import logo from './logo.svg';
import './App.css';
import SaveButton from './components/savebutton';
import NewButton from './components/newbutton';
import List from './components/list';
import Trix from "trix";
import React, {useState, useEffect} from "react";
import { ReactTrixRTEInput } from "react-trix-rte";
/* import fetch from 'node-fetch'; */
//import "trix/dist/trix";
//import { TrixEditor } from "react-trix";

export default function TrixEditor(props) {
    const [html, setHtml] = useState("");
    const [ins, setIns] = useState("");

    function handleChange(event, newHtml) {
        setHtml(newHtml); // OR custom on change listener.
    }
  
    /* function saveButtonClicked() {
        console.log({html});
    }

    function actButtonClicked() {
        setIns("setIns: clicked act"); // OR custom on change listener.
        console.log("static console.log: act clicked");
        //console.log({ins});

        var element = document.querySelector("trix-editor")
        element.editor.setSelectedRange([0, 999999999999999])
        element.editor.deleteInDirection("forward")
        element.editor.insertHTML("<strong>Hello</strong>");  // is a Trix.Editor instance
    } */

    return (
        <div className="App">
            <header className="App-header">
                
                <div className="topcontrols">
                    <List
                    />
                </div>
                
                <h1>My little React/Trix text editor</h1>
                
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo" 
                />
                
                <ReactTrixRTEInput
                    /* trixInputRef={saveButtonClicked2} */
                    placeholder="Input your text here!"
                    onChange={handleChange}
                    className="trix-editor"
                />
            </header>
        </div>
    )
}
