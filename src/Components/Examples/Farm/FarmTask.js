import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import IsValidUrl from '../../../Components/Image/Display/isUrl';

const Container = styled.div`
margin: 20px;
max-width: 180px;
font-size: 16px;
`;

function FarmTask(props) {
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
              { IsValidUrl(content) ? <div className='animals'><img src={content} width='80' /></div> 
              : <p>{content}</p>}
            </Container>
        )}
      </Draggable>
    );
}

export default FarmTask;
