import { useState } from "react";
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = 'ITEM';

const DraggableItem = ({ item, index, moveItem}) => {
  const [{isDragging}, drag] = useDrag({
    type: ItemType,
    item: {index},
  })


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
  <div ref={(node) => drag(drop(node))} style={{opacity: isDragging ? 0.5 : 1, padding: '8px', border: '1px solid #ccc'}}>
    {item}
  </div>
)
}

function App(){
  const [items, setItems] = useState(['Item1', 'Item2', 'Item3', 'Item4']);

  const moveItem = (fromIndex, toIndex) => {
    const newItems = [...items];
    const [removed] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, removed);
    setItems(newItems);
  };

  return(
    <DndProvider backend={HTML5Backend}>
      <h1>Drag Drop List</h1>
      {items.map((item, index)=>(
        <DraggableItem key={index} index={index} item={item} moveItem={moveItem}/>
      ))}
    </DndProvider>
  )
}

export default App;