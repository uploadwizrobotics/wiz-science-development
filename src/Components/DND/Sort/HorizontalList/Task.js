import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import IsValidUrl from '../../../Image/Display/isUrl';

const Container = styled.div`
margin: 20px;
max-width: 180px;
font-size: 16px;
`;

function Task(props) {
  const content = props.task.content;
    return (
      <Draggable draggableId={props.task.id} index={props.index}>
        {(provided, snapshot) => (
            <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
            >
              { IsValidUrl(content) ? <img src={content} width='100' height='100' /> 
              : <p>{content}</p>}
            </Container>
        )}
      </Draggable>
    );
}

export default Task;
