import React, { useState, useEffect } from "react";
import SaveButton from './savebutton';
import MyInput from './myinput';
import NewButton from './newbutton';

const Inp = MyInput;

export default function List(props) {
    const [data, setData] = useState(null);
    const [activeId, setActiveId] = useState("");
    const [activeName, setActiveName] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //FUNCTION FOR GETTING DATABASE DOCS
    const fetchData = () => {
        fetch("https://jsramverk-editor-joku17.azurewebsites.net/list")
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
                    setError(oldError => error);
                })
                    .finally(() => {
                    setLoading(oldLoading => false);
                });
        };


    //GET DATABASE DOCS
    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return "Loading...";
    if (error) return error.message;


    //CREATE DATABASE DOC
    function createNew() {
        var delivery = {
            name: "New document",
            html: ""
        };

        fetch("https://jsramverk-editor-joku17.azurewebsites.net/create", {
            body: JSON.stringify(delivery),
            headers: {
                'content-type': 'application/json'
                },
                method: 'POST'
            })

            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                //GET DATABASE DOCS
                fetchData();
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
                .finally(() => {
                setLoading(false);
                console.log("created ok")
            });
    }


    //UPDATE DATABASE DOC
    function update() {
        console.log(props.parentStates);
        var delivery = {
            filter: {activeId}.activeId,
            name: {activeName}.activeName,
            html: props.parentStates
        };

        console.log(delivery);

        fetch("https://jsramverk-editor-joku17.azurewebsites.net/update", {
            body: JSON.stringify(delivery),
            headers: {
                'content-type': 'application/json'
                },
                method: 'POST'
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                //GET DATABASE DOCS
                fetchData();
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
                .finally(() => {
                setLoading(false);
                console.log("update ok")
            });
    }


    //change handlers
    function inpChange(event) {
        setActiveName(event.target.value);
    }


    //click functions
    let {Component} = React;

    function liClicked(_id, name, html) {
        setActiveId(_id); // OR custom on change listener. */
        setActiveName(name);

        var element = document.querySelector("trix-editor")
        element.editor.setSelectedRange([0, 999999999999999])
        element.editor.deleteInDirection("forward")
        element.editor.insertHTML(html);  // is a Trix.Editor instance
    }

    function saveButtonClicked() {
        console.log({activeName});
        update();
    }

    function newButtonClicked() {
        console.log("static console.log: new button clicked");
        createNew();

        var element = document.querySelector("trix-editor");
        element.editor.setSelectedRange([0, 999999999999999]);
        element.editor.deleteInDirection("forward");
        element.editor.insertHTML("New document created, select it in the list above!");
    }


    //ul/li components
    class Ul extends Component {
        render() {
            return (
                <ul>
                    {data.data.map(item => <Li 
                        key={item._id}
                        item={item}
                        onClick={() => liClicked(item._id, item.name, item.html)}
                        />
                    )}
                </ul>
            );
        }
    }

    class Li extends Component {
        render() {
            return (
                <li
                    onClick={this.props.onClick}
                >
                    {this.props.item.name}
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
