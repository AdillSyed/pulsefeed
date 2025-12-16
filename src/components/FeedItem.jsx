export default function FeedItem({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #222",
        cursor: "pointer",
        background:
          item.type === "error"
            ? "#2a1414"
            : item.type === "warning"
            ? "#2a2414"
            : "transparent"
      }}
    >
      <strong>{item.title}</strong>
      <div style={{ fontSize: "12px", opacity: 0.7 }}>
        {item.timestamp}
      </div>
    </div>
  );
}
