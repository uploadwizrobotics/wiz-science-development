import React, { useState,  useRef } from "react";
import { slice, concat } from 'lodash';
import { otherTextContext } from "../../Components/Default/Default";
import { endContext } from "../../Parser/ParsePage";
import { otherContext } from "../../Parser/ParsePage";
import { showMoreContext } from "../../Parser/ParsePage";
import { showMoreTextContext } from "../../Components/Default/Default";
import { listTextContext } from "../../Components/Default/Default";
import { indexTextContext } from "../../Components/Default/Default";
import { indexContext } from "../../Parser/ParsePage";
import { nextContext } from "../../Parser/ParsePage";
import LoadMore from "../Continue/LoadMore";

// function to load more
const NextLoadMore = () => {

    const [end, setEnd] = React.useContext(endContext);
    const [next, setNext] = React.useContext(nextContext);
    const [showMore, setShowMore] = React.useContext(showMoreContext);
    const [showMoreText, setShowMoreText] = React.useContext(showMoreTextContext);
    const [textList, setTextList] = React.useContext(listTextContext);
    const [textIndex, setTextIndex] = React.useContext(indexTextContext);
    const [index, setIndex] = React.useContext(indexContext);
    const value = React.useContext(otherContext);
    const textValue = React.useContext(otherTextContext);

    var limit = 1;
    var length = 0;
    var componentLen = 0;
    var moreComponents = false;
    var data = [];

    textValue.map((state, idx) => {
        if (idx === 0) {
            limit = state;
        } else if (idx === 1) {
            length = state;
        } else {
            data = state;
        }
    });

    value.map((state, idx) => {
        if (idx === 1) {
            componentLen = state;
            if (index < componentLen) {
                moreComponents = true;
            }
        }
    });

    // updates index (+ limit each time)
    const newIndex = textIndex + limit;
    // determines if there is data left to display

    const newShowMore = textIndex < length - 1;

    const addItem = slice(data, textIndex, newIndex);

    // updates list (+ limit of data)
    const newList = concat(textList, addItem);

    setShowMoreText(newShowMore);

    // set new variables to current
    setTextIndex(newIndex);

    setTextList(newList);

    setNext(textIndex !== length - 1);

    setShowMore((textIndex === length - 1) && !end);
}

export default NextLoadMore;