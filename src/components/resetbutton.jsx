import React from "react";

const ResetButton = ({
    className,
    onClick
}) => {
    return (
        <button 
            className={className + "-button"}
            onClick={onClick}
        >
            <i className="fa fa-database"></i>
            <span> Reset DB</span>
        </button>
    );
};

export default ResetButton;
