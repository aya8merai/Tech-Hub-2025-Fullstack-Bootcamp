// import { useState } from 'react'
import { Link, Outlet } from 'react-router'
import '../App.css'

function Layout() {
  return (
    <>
      <header className="header-nav-container">
        <nav className="main-navbar">
          <Link to="/">
            <img
              src="/AH Logo.png"
              alt="AH logo"
              className="logo"
              title="Go to the home page" 
            />
          </Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
        </nav>
      </header>
      <main id="about-main">
        <Outlet/>
      </main>

      <footer className="footer-nav-container">
        <p id="copyrights">&copy; 2025 - A.H TECH HUB.</p>
      </footer>
    </>
  )
}

export default Layout
