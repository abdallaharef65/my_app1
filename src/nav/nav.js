import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link className="nav-link" to="/Sing">
        Sing
      </Link>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Outlet />
    </div>
  );
};

export default Nav;
