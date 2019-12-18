import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isOpened, setOpened] = useState(false);

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);
  return (
    <div className="App">
      <header className="App-header">
        <button className="btn btn-primary" onClick={openModal}>
          Abrir modal
        </button>
        <Modal title="Welcome" isOpened={isOpened} onClose={closeModal}>This is a modal</Modal>
      </header>
    </div>
  );
}

export default App;
