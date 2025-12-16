import FeedItem from "./FeedItem";

export default function FeedList({ items, onSelect }) {
  return (
    <div>
      {items.map(item => (
        <FeedItem
          key={item.id}
          item={item}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}
