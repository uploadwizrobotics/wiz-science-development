import React, { useEffect, useState, } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { showMoreContext } from "../../../../Parser/ParsePage";
import { endContext } from "../../../../Parser/ParsePage";
import { typeContext } from "../../../../Parser/ParsePage";
import scrollToDummy from '../../../../Transitions/ScrollTo';
import LoadMore from "../../../../Transitions/Continue/LoadMore";
import "./Vert.css"

function DND(props) {

  const header = props.header;
  const data = props.data;
  const answer = props.answer;

  return (
    <div className = 'vertical'>
      <div className='layout__wrapper'>
        <div className='layout__header'>
          <div className='app-bar'>
            <div className='app-bar__title'>
              {header}
            </div>
          </div>
        </div>
        <SortingGame data={data} answer={answer}/>
      </div>
    </div>
  );
}

function SortingGame(props) {

  const [showMore, setShowMore] = React.useContext(showMoreContext);
  const [end, setEnd] = React.useContext(endContext);
  const [loadMore, setLoadMore] = useState(false);
  const [count, setCount] = useState(0);

  const DATA = props.data;
  const ANSWER = props.answer;
  const pagetype = props.pagetype;

  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState({});
  
  useEffect(() => {
    // Mock an API call, initial build
    buildAndSave(DATA);
  }, []);
  
  // Build and save the orientation of the groups
  function buildAndSave(items) {
    const groups = {};
    const length = Object.keys(items).length;
    for (let i = 0; i < length; ++i) {
      const currentGroup = items[i];
      // Add DATA ids to group array
      groups[currentGroup.id] = i;
    }
    
    // Set the data
    setItems(items);
    
    // Make the groups searchable via their id
    setGroups(groups);

  }

  function HandleClick() {
      const length = Object.keys(items).length;
      for (let i = 0; i < length; ++i) {
        const group = items[i];
        const ansgroup = ANSWER[i];
        if (group.id !== ansgroup.id) {
          return;
        } else if (group.label !== ansgroup.label) {
          return;
        } else {
          const numItems = group.items.length;
          for (let i = 0; i < numItems; ++i) {
            const item = group.items[i];
            const numAns = ansgroup.items.length;
            for (let j = 0; j < numAns; ++j) {
              const answer = ansgroup.items[j];
              if (item.id === answer.id) {
                break;
              } else if (j === numAns - 1) {
                return;
              }
            }
          }
        }
      }
      console.log('Success');
      setLoadMore(true);
      scrollToDummy();
    
  }

  if (loadMore === true && !end && count === 0) {
    const newCount = count + 1;
    setCount(newCount);
    LoadMore();
    setLoadMore(false);
    setShowMore(true);
}
  
  return (
    <DragDropContext 

      onDragEnd={(result) => {

        const { destination, draggableId, source, type, } = result;

        // Did not reach a valid destination (cancel)
        if (!destination) {
          return;
        }

        // If the destination is the same as where the item started, return it to it's original position
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
          return;
        }
        
        // An entire group is moved
        if ('group' === type) {

          // Hold the source and destination indices
          const sourceIndex = source.index;
          const targetIndex = destination.index;
          // Make a shallow copy of the current arrangement of groups
          const workValue = items.slice();
          // Remove group at sourceIndex
          const [deletedItem, ] = workValue.splice(sourceIndex, 1);
          // Insert removed group into destinationIndex
          workValue.splice(targetIndex, 0, deletedItem);

          buildAndSave(workValue);
          
          return;
        }

        // Get the source item and the corresponding items
        const sourceDroppableIndex = groups[source.droppableId];
        const targetDroppableIndex = groups[destination.droppableId];
        // create a new array with the items currently in source
        const sourceItems = items[sourceDroppableIndex].items.slice();
        // if the destination is not the same as the source, create a new array with the items currently in destination
        const targetItems = source.droppableId !== destination.droppableId ? items[targetDroppableIndex].items.slice() : sourceItems;
        
        // Pull the item from the source
        const [deletedItem, ] = sourceItems.splice(source.index, 1);
        targetItems.splice(destination.index, 0, deletedItem);
        
       // make a shallow copy of the current arrangement of items
        const workValue = items.slice();
        workValue[sourceDroppableIndex] = {
          ...items[sourceDroppableIndex],
          items: sourceItems,
        };
        workValue[targetDroppableIndex] = {
          ...items[targetDroppableIndex],
          items: targetItems,
        };
        
        setItems(workValue);
      }}
    >
      <Droppable droppableId='ROOT' type='group'>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable 
                draggableId={item.id}
                key={item.id}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <DroppableList
                      key={item.id}
                      {...item}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className={`holder holder--tint-5`} >
        { (pagetype === 'Lesson') && 
        <button className='holder__title__button' onClick={HandleClick}>
          Submit
        </button> }
      </div>
    </DragDropContext>
  );
}

function DroppableList({ id, items, label, tint, }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <div className={`holder holder--tint-${tint}`}>
            <div className='holder__title'>
              {label}
            </div>
            <div className='holder__content'>
              <ul className='list'>
                {items.map((item, index) => (
                  <li 
                    className='list__item'
                    key={item.id}
                  >
                    <Draggable 
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className='card'
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item.label}
                        </div>
                      )}
                    </Draggable>
                  </li>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default DND;
