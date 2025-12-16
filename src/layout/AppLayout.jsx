import "../styles/layout.css";

export default function AppLayout({ header, feed, detail }) {
  return (
    <div className="app-root">
      <header className="app-header">{header}</header>

      <main className="app-main">
        <section className="feed-section">{feed}</section>
        <aside className="detail-section">{detail}</aside>
      </main>
    </div>
  );
}
