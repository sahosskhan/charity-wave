import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
<div className="navbar max-w-screen-2xl container mx-auto rounded-b-2xl bg-blue-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <i className="text-black text-2xl fa-solid fa-bars"></i>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600  " : ""
              }
            >
              Home
            </NavLink>

          </li>
          <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/donate-some-love"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 " : ""
              }
            >
              Donate
            </NavLink>
          </li>
          <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/my-donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 " : ""
              }
            >
               My Donation
            </NavLink>
          </li>
          <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 " : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
      </ul>
    </div>
<div className="flex justify-center items-center gap-2">
    <img className="lg:h-14 md:h-10 h-7" src="/icon/logo.png" alt="" />
    <h1 className="lg:text-3xl md:text-lg text-md font-semibold">Charity Wave</h1>
</div>
  </div>
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600  " : ""
              }
            >
              Home
            </NavLink>

          </li>
          <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/donate-some-love"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 " : ""
              }
            >
              Donate
            </NavLink>
          </li>
          <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/my-donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 " : ""
              }
            >
              My Donation
            </NavLink>
          </li>
          <li className="text-2xl font-semibold text-black">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600 " : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;