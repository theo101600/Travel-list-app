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

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll() {
    if (confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
