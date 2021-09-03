import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyToolBar from './components/mytoolbar';
/* import "trix/dist/trix"; */
import { TrixEditor } from "react-trix";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            html: ""
        };
    }

    handleEditorReady(editor) {
        editor.insertString("Input your text in this field!");
    }

    handleContentChange = (html, text) => {
        this.setState({text : text});
        this.setState({html : html});
    };

    saveButtonClicked = () => {
        console.log("text: " + this.state.text);
        console.log("html: " + this.state.html);
    };

    render(){
        return(
        <div className="App">
            <header className="App-header">
                <MyToolBar 
                    onClick={this.saveButtonClicked}
                    className={"save"}
                />
                <h1>My little React/Trix text editor</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <TrixEditor
                    autoFocus={true}
                    onChange={this.handleContentChange}
                    onEditorReady={this.handleEditorReady} />
            </header>
        </div>
        );
    }
}
