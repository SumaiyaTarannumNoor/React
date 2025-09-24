import React, {useState} from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const ItemType = 'ITEM';

const DraggableItem = ({item, index, moveItem}) => {
  const [{isDragging}, drag] = useDrag({
    type: ItemType,
    item: {index},
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return(
    <div ref={(node) => drag(drop(node))} style={{opacity: isDragging ? 0.6 : 1, padding: '8px', margin: '4px', background: '#f0f0f0', cursor: 'move'}}>
      {item}
    </div>
  );
};

function DragDropList(){
  const [items, setItems] = useState(['Item1', 'Item 2', 'Item 3', 'Item 4']);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [removed] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, removed);
    setItems(newItems);
  };

  return(
    <DndProvider backend={HTML5Backend}>
      <h1>Drag and Drop List</h1>
      {items.map((item, index) => (
        <DraggableItem key={index} index={index} item={item} moveItem={moveItem}/>
      ))}
    </DndProvider>
  )
}

export default DragDropList;