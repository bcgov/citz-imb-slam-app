import React from "react";

const FormGrid = props => {
    return <div className={"Form-" + props.type}>{props.children}Form</div>;
};

export default FormGrid;
