import React from "react";

const NewButton = ({
    className,
    onClick
}) => {
    return (
        <button 
            className={className + "-button"}
            onClick={onClick}
        >
            <i className="fa fa-file"></i>
            <span> New</span>
        </button>
    );
};

export default NewButton;

//har inte fullt ut förberett för en toolbar med individuella knappar, men det kommer.
