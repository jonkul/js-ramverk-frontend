import React, { useState, useEffect } from "react";
import { ReactTrixRTEInput } from "react-trix-rte";
import Trix from "trix";
import SaveButton from './savebutton';
import MyInput from './myinput';
import NewButton from './newbutton';

const Inp = MyInput;

export default function List(props) {
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



    function createNew() {
        var delivery = {
            name: "New document",
            html: ""
        };

        fetch("http://localhost:1337/create", {
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
            .then((data) => { ///////////////////// ->
                /* setData(oldData => data); */
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



    function update() {
        setActiveHtml(props.parentStates);
        console.log(props.parentStates);
        var delivery = {
            filter: {activeId}.activeId,
            name: {activeName}.activeName,
            html: props.parentStates
        };

        console.log(delivery);

        fetch("http://localhost:1337/update", {
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
            .then((data) => { ///////////////////// ->
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


    //click functions
    let {Component} = React;

    function inpChange(event) {
        setActiveName(event.target.value);
    }

    function liClicked(_id, name, html) {
        setActiveId(_id); // OR custom on change listener. */
        setActiveName(name);
        setActiveHtml(html);

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
