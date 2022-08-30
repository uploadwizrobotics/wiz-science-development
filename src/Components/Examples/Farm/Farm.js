import { React, useState }from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import FarmColumn from './FarmColumn.js';
import RetroButton from '../../../Components/UI/Buttons/Retro/RetroButton.js';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  justify-content: center;
  text-align: center;
  border: solid #90be6d;
  background-color: #90be6d;
  min-width: 500px;
  max-width: 74%;
  min-height: 450px;
  border-radius: 40px;
  display: inline-flex;
  flex-wrap: wrap;
`;

function Farm(props) {

  const initialData = props.data;
  const Answer = props.answer;
  const header = props.header;
  const [data, setData] = useState(initialData);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if ( destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const home = data.columns[source.droppableId];
    const foreign = data.columns[destination.droppableId];

    // if destination = source, reorder list
    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newHome.id]: newHome,
        },
      };

      setData(newData);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    setData(newData);
  };


  function HandleSubmit() {
    const length = Object.keys(data).length;
      for (let i = 0; i < length; ++i) {
        const columnId = data.columnOrder[i];
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(
          taskId => data.tasks[taskId],
        );
        const anscolumn = Answer.columns[columnId];
        const anstasks = anscolumn.taskIds.map(
          taskId => data.tasks[taskId],
        );
        const len1 = (Math.max(tasks.length, anstasks.length));
        for (let i = 0; i < len1; ++i) {
          const len2 = (Math.min(tasks.length, anstasks.length));
          if (len1 !== len2) {
            return;
          } else {
            for (let j = 0; j < len2; ++j) {
              if (tasks[i] === anstasks[j]) {
                break;
              } else if (j === len2 - 1) {
                return;
              }
            }
          }
        }
      }
    return "Success";
  }

  return (
    <div className="horizontal">
      <h1>{header}</h1>
      <DragDropContext 
        onDragEnd={handleDragEnd}
      >
        <Container>
          {data.columnOrder.map(columnId => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(
                taskId => data.tasks[taskId],
            );
              return <FarmColumn column={column} tasks={tasks} />;
          })}
          <RetroButton handleSubmit={HandleSubmit} />
        </Container>
      </DragDropContext>
    </div>

  );
}

export default Farm;
