import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((currValue) => [...currValue, item]);
  }

  function handleDeleteItems(selectedItem) {
    console.log(`Deleted item - ${selectedItem.description}.`);
    setItems((currValue) =>
      currValue.filter((item) => item.id !== selectedItem.id)
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} />
      <Stats />
    </div>
  );
}

export default App;
