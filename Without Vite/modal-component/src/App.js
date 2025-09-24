import React, {useState} from 'react';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <div>
      <h1>Modal Component</h1>
      <button onClick={()=> setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is a reusable modal component</p>
      </Modal>
    </div>
  )
}

export default App;
