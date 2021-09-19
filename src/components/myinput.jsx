import React from "react";

const MyInput = ({
    value,
    onChange
}) => {
    return (
        <div key="div2">
            <h4>
                Active document: 
            </h4>
            <input
                key="texta"
                id="texta"
                rows="1"
                placeholder="Create or open a document!"
                value={value}
                onChange={onChange}
            >
            </input>
        </div>
    );
};

export default MyInput;

//har inte fullt ut förberett för en toolbar med individuella knappar, men det kommer.



