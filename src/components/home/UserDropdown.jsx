import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserDropdown = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Successful logout
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="dropdown dropdown-end z-50">
      {/* Avatar Button */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform"
      >
        <div className="w-10 h-10 rounded-full ring-2 ring-indigo-500/50 p-0.5">
          <img
            src={user?.photoURL || "./avatar.jpg"}
            alt={user?.displayName || "Aura Tech User"}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Dropdown Content */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-base-100 rounded-2xl w-60 border border-base-200/80 gap-1"
      >
        {/* User Info Header */}
        <li className="px-3 py-2 border-b border-base-200 mb-1 pointer-events-none">
          <p className="font-semibold text-slate-200 truncate">
            {user?.displayName || "User Name"}
          </p>
          <p className="text-xs text-slate-400 truncate">
            {user?.email || "user@example.com"}
          </p>
        </li>

        {/* Links */}
        <li>
          <Link to="/dashboard" className="py-2 hover:bg-indigo-500/10 hover:text-indigo-400 rounded-lg font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/profile" className="py-2 hover:bg-indigo-500/10 hover:text-indigo-400 rounded-lg font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile Settings
          </Link>
        </li>

        <div className="my-1 border-t border-base-200"></div>

        {/* Logout Button */}
        <li>
          <button
            onClick={handleLogout}
            className="py-2 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 rounded-lg font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;