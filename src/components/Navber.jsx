import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; 
import UserDropdown from './home/UserDropdown';


const Navber = () => {
  const { user } = useAuth();

  return (
    <div className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200 shadow-sm w-full py-2">
      <div className="w-full px-4 md:px-12 mx-auto flex items-center justify-between">

        {/* 1. Left Side: Brand Logo & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Mobile Responsive Dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-3 shadow-2xl border border-base-200 gap-2">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-black tracking-wider text-indigo-500 flex items-center gap-1 py-1">
            Aura<span className="text-base-content">Tech</span>
            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></span>
          </Link>
        </div>

        {/* 2. Middle Navigation Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8 text-base font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'font-bold text-indigo-500' : 'hover:text-indigo-400 transition-colors'}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => isActive ? 'font-bold text-indigo-500' : 'hover:text-indigo-400 transition-colors'}
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'font-bold text-indigo-500' : 'hover:text-indigo-400 transition-colors'}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'font-bold text-indigo-500' : 'hover:text-indigo-400 transition-colors'}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3. Right Side: Cart & Dynamic Auth State */}
        <div className="flex items-center gap-5">
          {/* Cart Icon */}
          <div className="relative flex items-center justify-center p-2 rounded-full hover:bg-base-200 cursor-pointer transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              3
            </span>
          </div>

          {/* Conditional Rendering: User logged in OR logged out */}
          {user ? (
            <UserDropdown />
          ) : (
            <div className="flex items-center gap-2.5 pl-2 border-l border-base-300">
              {/* User Icon */}
              <div className="p-2 rounded-full bg-base-200/60 text-indigo-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>

              {/* Text Layout (Matching Image) */}
              <div className="flex flex-col text-xs leading-tight">
                <span className="font-semibold text-slate-200 text-sm">Account</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Link to="/register" className="text-indigo-400 hover:underline font-medium">
                    Register
                  </Link>
                  <span className="text-slate-500">or</span>
                  <Link to="/login" className="text-slate-300 hover:text-indigo-400 hover:underline font-medium">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navber;