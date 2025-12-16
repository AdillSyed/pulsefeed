import { useSelector } from "react-redux";
import EmptyState from "./EmptyState";

export default function DetailPanel() {
  
  const selectedId = useSelector(state => state.feed.selectedId);
  const items = useSelector(state => state.feed.items);
  const selectedItem = items.find(i => i.id === selectedId);
  if (!selectedItem) return <EmptyState />;
  return (
    <div>
      <h3>{selectedItem.title}</h3>
      <p>{selectedItem.description}</p>
    </div>
  );
}
