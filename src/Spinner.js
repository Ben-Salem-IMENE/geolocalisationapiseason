import React from "react";
import './Spinner.css';
const Spinner = (props) => {
    return (<div className="ui segment">
        <div className="ui active dimmer height-dimmer">
            <div className="ui huge text loader">{props.messageSpinner}</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
    </div>
    );
}
Spinner.defaultProps ={
    messageSpinner: 'Loading ...'
};


export default Spinner;
