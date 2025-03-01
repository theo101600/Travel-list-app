export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start adding items to bring to your trip!
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = ((numPacked / numItems) * 100).toFixed(2);

  return (
    <footer className="stats">
      {percentage == 100 ? (
        <em>You are ready to go!</em>
      ) : (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked}
          {` (${percentage}`}&#37;{")"}
        </em>
      )}
    </footer>
  );
}
