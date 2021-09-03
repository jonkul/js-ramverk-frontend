import React from "react";

const MyToolBar = ({
    className,
    onClick
}) => {
    return (
        <button 
            className={className + "-button"}
            onClick={onClick}
        >
        <i class="fa fa-save"></i>
        <span> Save</span>
        </button>
    );
};

export default MyToolBar;

//har inte fullt ut förberett för en toolbar med individuella knappar, men det kommer.
