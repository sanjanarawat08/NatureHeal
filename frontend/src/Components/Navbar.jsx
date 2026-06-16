function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">NatureHeal</h2>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/bookings">Bookings</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;