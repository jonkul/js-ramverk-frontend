import React, { useState, useEffect } from "react";
import { ReactTrixRTEInput } from "react-trix-rte";
import Trix from "trix";
import SaveButton from './savebutton';
import MyInput from './myinput';
import NewButton from './newbutton';

const Inp = MyInput;

//get list from API function
export default function List() {
    const [data, setData] = useState(null);
    const [activeId, setActiveId] = useState("");
    const [activeName, setActiveName] = useState("");
    const [activeHtml, setActiveHtml] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:1337/list")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setData(oldData => data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
                .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return "Loading...";
    if (error) return error.message;

    //click functions
    let {Component} = React;

    /* function saveButtonClicked(html) {
        console.log(html);
    } */

    function inpChange(event) {
        setActiveName(event.target.value);
        /* setDisabled(false); */

        /* if (event.target.value < 1) {
            setDisabled(true);
        } */

        
        
        /* console.log("activename:");
        console.log({activeName});
        console.log("event.target.value:");
        console.log(event.target.value); */

        /* setActiveId(_id); // OR custom on change listener. */
        /* var nameC = document.querySelector("texta"); */
        
        //setActiveName(nameC);
        /* setActiveHtml(html); */
        //console.log("static console.log: act clicked");
        

        /* var element = document.querySelector("trix-editor")
        element.editor.setSelectedRange([0, 999999999999999])
        element.editor.deleteInDirection("forward")
        element.editor.insertHTML(html);  // is a Trix.Editor instance */
    }

    function liClicked(_id, name, html) {
        setActiveId(_id); // OR custom on change listener. */
        setActiveName(name);
        setActiveHtml(html);
        //console.log("static console.log: act clicked");
        //console.log(_id);

        var element = document.querySelector("trix-editor")
        element.editor.setSelectedRange([0, 999999999999999])
        element.editor.deleteInDirection("forward")
        element.editor.insertHTML(html);  // is a Trix.Editor instance
    }

    function saveButtonClicked() {
        console.log({activeName});
    }

    function newButtonClicked() {
        /* setIns("setIns: clicked act"); // OR custom on change listener. */
        console.log("static console.log: act clicked");
        //console.log({ins});

        var element = document.querySelector("trix-editor");
        element.editor.setSelectedRange([0, 999999999999999]);
        element.editor.deleteInDirection("forward");
        element.editor.insertHTML("<strong>Hello</strong>");  // is a Trix.Editor instance
    }

    //ul/li components
    class Ul extends Component {
        render() {
            return (
                <ul key="ul">
                    {data.data.map(item => <Li
                        options={item}
                        onClick={() => liClicked(item._id, item.name, item.html)}
                        />,
                    )}
                </ul>
            );
        }
    }

    class Li extends Component {
        render() {
             let {name} = this.props.options
            return (
                <li
                    key="li"
                    onClick={this.props.onClick}
                >
                    {name}
                </li>
            );
        }
    }

    return (
        <>
            <div key="div">
                <div key="div3">
                    <NewButton
                        onClick={newButtonClicked}
                        className={"new"}
                    />
                    <SaveButton 
                        onClick={saveButtonClicked}
                        className={"save"}
                        disabled={!activeId}
                    />
                    <Inp
                        key="texta"
                        value={activeName}
                        onChange={inpChange}
                    >
                    </Inp>
                    <h3 id="dokument">Dokument:</h3>
                    <Ul
                    />
                </div>
            </div>
        </>
    );
}


//
