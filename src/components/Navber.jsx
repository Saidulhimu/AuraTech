import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
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

        {/* 3. Right Side: Cart & Static Auth/Avatar */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div className="relative flex items-center justify-center p-2 rounded-full hover:bg-base-200 cursor-pointer transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              3
            </span>
          </div>

          {/* Static User Avatar & Auth Buttons */}
          <div className="flex items-center gap-3 pl-2 border-l border-base-300">
            {/* Avatar Placeholder */}
            <div className="w-9 h-9 rounded-full ring-2 ring-indigo-500/50 p-0.5 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Himu"
                alt="User Avatar"
                className="w-full h-full rounded-full bg-base-200"
              />
            </div>

            {/* Static Login Button */}
            <Link
              to="/login"
              className="hidden sm:inline-block px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-500 border border-indigo-500/30 transition-all"
            >
              Login
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navber;