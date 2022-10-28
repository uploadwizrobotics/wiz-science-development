import { React, useState } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task.js';
import './Horiz.css'
import IsValidUrl from '../../../Image/Display/isUrl.js';

const Title = styled.h3`
  padding-top: 15px;
  padding-bottom: 4px;
  color: #181818;
  font-weight: 600;
`;
const TaskList = styled.div`
  justify-content:center;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 18px;
  transition: background-color 0.2s ease;
  border-radius: 15px;
  background-color: '#F0F0F0';
  flex-grow: 1;
  display: flex;
`;


function Column(props) {
    const column = props.column;
    const tasks = props.tasks;
    var container = 'input';

    if (column.type === 'options') {
      container = 'option';
    } else {
      container = 'input';
    }

    const Container = (container === 'input') ? 
      styled.div`
        margin: 15px;
        min-width:200px;
        max-width:300px;
        border: 2px dashed silver;
        border-radius: 15px;
        display: inline-block;
        display: flex;
        flex-direction: column;
      `
    :
      styled.div`
      min-width: 500px;
      width: 100%;
      `
    ;
    return (
      <Container>
          <Title>{IsValidUrl(column.title) ? <div className="expression"><img src={column.title} width='200'/></div> : column.title}</Title>
          <Droppable droppableId={column.id} direction="horizontal" >
            {(provided, snapshot) => (
                  <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                  >
                  {tasks.map((task, index) => (
                      <Task key={task.id} task={task} index={index} />
                  ))}

                  {provided.placeholder}
                  </TaskList>
            )}
          </Droppable>
      </Container>
    );
}

export default Column;
