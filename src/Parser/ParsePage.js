import ParseComponent from "./ParseComponent.js"
import Continue from '../Transitions/Continue/Continue.js'
import React, { useState } from "react";
import { slice, concat } from 'lodash';
export const otherContext = React.createContext();
export const showMoreContext = React.createContext();
export const listContext = React.createContext();
export const indexContext = React.createContext();
export const nextContext = React.createContext();
export const endContext = React.createContext();
export const typeContext = React.createContext();
/* ------------------ DISPLAY PARSED DATA ------------------ */ 

const ParsePage = (props) => {

    const page = props.page;
    var data = [];
    var length = 0;
    var transition = false;
    var type = 'Continue';
    var limit = 0;
    var Content = [];
    var Type = null;

    Object.keys(page).map((key) => {
      if (key === 'Length') {
        length = page[key];
      } else if (key === 'Type') {
        Type = page[key];
      } else if (key === 'Transition') {
        if (page[key] !== null) {
          transition = true;
          Object.values(page[key]).map((data, id) => {
            if (id === 0) {
              type = data;
            } else {
              limit = data;
            }
          })
        }
      } else if (key === 'Content') {
        if (transition) {
          if (type === 'Continue') {
            {page[key].map(component =>
              data = concat(data, <ParseComponent component={component} pagetype={Type}/>)
            )}
          }
         } else {
          Content = page[key];
        }
      } else {
        // else key === 'Audio'
        if (page[key] !== null) { 
          // do something
        }
      }
    });

    // var to check if there is any data left to display
    const [showMore, setShowMore] = useState(true);
    // initial list of data to display (cuts off array at limit # of elements)
    const [list, setList] = useState(slice(data, 0, limit));
    // var to manage index (initial index is limit)
    const [index, setIndex] = useState(limit);
    const [next, setNext] = useState(false);
    const [end, setEnd] = useState(false);

    // iterate and parse through each element inside page JSON (content, transition, etc)
    // page scrolls down to dummy div upon button click
    return (
      <typeContext.Provider value={Type} >
        <endContext.Provider value={[end, setEnd]} >
          <nextContext.Provider value={[next, setNext]} >
            <otherContext.Provider value={[limit, length, data]}>
              <showMoreContext.Provider value={[showMore, setShowMore]}>
                <listContext.Provider value={[list, setList]}>
                  <indexContext.Provider value={[index, setIndex]}>
                    { transition ? 
                      <Continue />
                    : Content.map(component =>
                        <ParseComponent component={component} />)
                    }
                  </indexContext.Provider>
                </listContext.Provider>
              </showMoreContext.Provider>
            </otherContext.Provider>
          </nextContext.Provider>
        </endContext.Provider>
      </typeContext.Provider>
    );

}

export default ParsePage;