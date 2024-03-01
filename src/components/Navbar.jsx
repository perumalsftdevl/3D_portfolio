import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-12 h-12 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "
      >
        <p className="blue-gradient_text text-lg">PP</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() =>
            window.open(
              "https://firebasestorage.googleapis.com/v0/b/portfolio-c84b8.appspot.com/o/Final_Resume.pdf?alt=media&token=0457f7c3-ab08-4233-9da5-4911b5009b83"
            )
          }
        >
          Download CV
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
