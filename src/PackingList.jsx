import Item from "./Item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "T-shirt", quantity: 6, packed: false },
  { id: 4, description: "Pants", quantity: 3, packed: false },
  { id: 5, description: "Power Bank", quantity: 1, packed: true },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
