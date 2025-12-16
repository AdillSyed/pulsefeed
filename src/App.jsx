import AppLayout from "./layout/AppLayout";
import Header from "./components/Header";
import FeedList from "./components/FeedList";
import DetailPanel from "./components/DetailPanel";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from "./store/feedSlice";
//import { useState } from "react";

// const mockItems = Array.from({ length: 50 }, (_, i) => ({
//   id: i,
//   title: `Event ${i + 1}`,
//   type: i % 5 === 0 ? "error" : i % 3 === 0 ? "warning" : "info",
//   timestamp: new Date().toLocaleTimeString(),
//   description: "Sample event description"
// }));

export default function App() {
  //const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();
  const items = useSelector(state => state.feed.items);

  const handleSelect = (id) => {
    dispatch(selectItem(id));
  };


  return (
    <AppLayout
      header={<Header />}
      feed={<FeedList items={items} onSelect={handleSelect} />}
      detail={<DetailPanel selected={selectItem} />}
    />
  );
}
