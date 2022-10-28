import React, { useEffect, useState } from "react";
import { slice, concat } from 'lodash';
import { otherContext } from "../../Parser/ParsePage.js";
import { showMoreContext } from "../../Parser/ParsePage.js";
import { listContext } from "../../Parser/ParsePage.js";
import { indexContext } from "../../Parser/ParsePage.js";
import { endContext } from "../../Parser/ParsePage.js";

// function to load more
const LoadMore = () => {
    
    const [showMore, setShowMore] = React.useContext(showMoreContext);
    const [list, setList] = React.useContext(listContext);
    const [index, setIndex] = React.useContext(indexContext);
    const [end, setEnd] = React.useContext(endContext);
    const value = React.useContext(otherContext);

    var limit = 1;
    var length = 0;
    var data = [];

    value.map((state, idx) => {
        if (idx === 0) {
            limit = state;
        } else if (idx === 1) {
            length = state;
        } else {
            data = state;
        }
    });

    // updates index (+ limit each time)
    const newIndex = index + limit;
    // determines if there is data left to display
    const newShowMore = newIndex < length;
    const addItem = slice(data, index, newIndex);
    const type = addItem[0].props.component.Type;

    /*if (type !== 'Default') {
        if (type !== 'Number Line') {
        setShowMore(false); 
        }
    } else {*/
        setShowMore(newShowMore);
    //}

    // updates list (+ limit of data)
    const newList = concat(list, addItem);

    // set new variables to current
    setIndex(newIndex);

    setList(newList);
}

export default LoadMore;