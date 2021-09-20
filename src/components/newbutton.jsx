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
