import { useState } from "react";
import "./App.css";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {}
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
