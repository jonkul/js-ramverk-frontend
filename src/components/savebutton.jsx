import React from "react";

const SaveButton = ({
    className,
    onClick,
    disabled
}) => {
    return (
        <button 
            className={className + "-button-" + disabled}
            itemID="save"
            onClick={onClick}
            disabled={disabled}
        >
            <i className="fa fa-save"></i>
            <span> Save</span>
        </button>
    );
};

export default SaveButton;

//har inte fullt ut förberett för en toolbar med individuella knappar, men det kommer.
