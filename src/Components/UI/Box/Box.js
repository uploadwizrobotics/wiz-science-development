import React from "react"
import './Box.css'

const Box = (props) => {
    const classes = props.classes;
    if (classes === "outer_box") {
        return (
        <div className="outer_square_white header">
            <div className="squircle__out squircle__big">
                <div className="squircle__content">
                    {props.children}
                </div>
                <div className="squircle">
                    <div className="squircle__in"></div>
                </div>
            </div>
        </div>
        );
    } else if (classes === "input_box") {
        return (
            <div className="squircle__input">
                <div className="squircle__content">
                    {props.children}
                </div>
            </div>
        );
    } else if (classes === "list_box") {
        return (
            <div className="outer_square_list header">
            <div className="squircle__list squircle__med">
                <div className="squircle__content__list">
                    {props.children}
                </div>
                <div className="squircle">
                    <div className="squircle__in"></div>
                </div>
            </div>
        </div>
        );
    } 
}

export default Box;
