import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-3">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/" className="flex gap-2 items-center">
              <img src={logo} alt="logo" width="60" height="60" />
              <div>
                <h5 className="font-bold text-textColor">
                  <span className="text-primary">SCHOLAR</span>STREAM
                </h5>
                <span className="text-sm text-neutral">
                  Unlock You Potencial
                </span>
              </div>
            </Link>
            {/* Menu items */}
            <ul className=" gap-2 hidden md:flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-menu active"
                      : "nav-menu"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-menu active"
                      : "nav-menu"
                  }
                  to="/all-scholarships"
                >
                  All ScholarShips
                </NavLink>
              </li>
            </ul>

            {/* Dropdown Menu */}
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                {/* Dropdown btn */}
                {user ? (
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                  >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                      {/* Avatar */}
                      <img
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                        src={user && user.photoURL ? user.photoURL : avatarImg}
                        alt="profile"
                        height="30"
                        width="30"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="p-2 rounded-3xl space-x-2 border-2 border-primary">
                    <Link to="/signup" className="font-semibold">
                      Login
                    </Link>
                    <Link to="/signup" className="font-semibold">
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      All Scholarships
                    </Link>

                    {user && (
                      <>
                        <Link
                          to="/dashboard"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
