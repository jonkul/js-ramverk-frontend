//FUNCTION FOR GETTING DATABASE DOCS
const fetchData = () => {
    return fetch("https://jsramverk-editor-joku17.azurewebsites.net/list")
        .then(response => response.json())
        /* .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            throw error;
        }); */
};


//FUNCTION FOR RESETING DATABASE
const setupDB = () => {
    fetch("https://jsramverk-editor-joku17.azurewebsites.net/setup")
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
        })
            .finally(() => {

        });
};


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
        })
            .finally(() => {
            console.log("created ok");
        });
}


//UPDATE DATABASE DOC
function update(activeId, activeName, parentStates) {
    /* console.log(props.parentStates); */
    var delivery = {
        filter: {activeId}.activeId,
        name: {activeName}.activeName,
        html: parentStates
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
            throw error;
        })
            .finally(() => {
            console.log("update ok");
        });
}


export {update, createNew, setupDB, fetchData};
