import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <div className="links">
        <Link href="/">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
