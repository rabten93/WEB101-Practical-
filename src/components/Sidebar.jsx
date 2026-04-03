function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">W</div>
      </div>

      <nav className="sidebar-nav">
        <button className="sidebar-btn active">💬</button>
        <button className="sidebar-btn">🟢</button>
        <button className="sidebar-btn">⭐</button>
        <button className="sidebar-btn">⚙️</button>
      </nav>
    </aside>
  )
}

export default Sidebar