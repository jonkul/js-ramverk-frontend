import logo from './logo.svg';
import './App.css';
import List from './components/list';
import React, {useState} from "react";
import { ReactTrixRTEInput } from "react-trix-rte";

export default function App(props) {
    const [html, setHtml] = useState("");

    function handleChange(event, newHtml) {
        setHtml(newHtml); // OR custom on change listener.
    }

    return (
        <div className="App">
            <header className="App-header">
                <div id="head">
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo" 
                    />
                    <h1>My little React/Trix text editor</h1>
                </div>
                
                <div className="topcontrols">
                    <List
                        parentStates={html}
                    />
                </div>
                <ReactTrixRTEInput
                    id="trix-editor"
                    placeholder="Input your text here!"
                    onChange={handleChange}
                    className="trix-editor-class"
                />
            </header>
        </div>
    )
}
