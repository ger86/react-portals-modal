import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Child from "./components/Child";

function App() {
  const [isOpened, setOpened] = useState(false);
  const [counter, setCounter] = useState(0);

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);
  const handleClick = () => setCounter(counter + 1);

  return (
    <div className="App" onClick={handleClick}>
      <header className="App-header">
        <button className="btn btn-primary" onClick={openModal}>
          Abrir modal
        </button>
        <div>Counter: {counter}</div>
        <Modal title="Welcome" isOpened={isOpened} onClose={closeModal}>
          <Child />
        </Modal>
      </header>
    </div>
  );
}

export default App;
