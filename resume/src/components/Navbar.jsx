import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">My Resume</h1>

        <div className="flex gap-6">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/about" className="hover:text-blue-600">About</NavLink>
          <NavLink to="/skills" className="hover:text-blue-600">Skills</NavLink>
          <NavLink to="/projects" className="hover:text-blue-600">Projects</NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
