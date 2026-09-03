import { Link } from "react-router-dom";
import { FiGrid, FiHome, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
    return (
        <div className="bg-slate-900 w-full h-full border-r border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="p-6">
                {/* Logo Section */}
                <Link to="/" className="text-2xl font-black tracking-wider text-indigo-400 flex items-center gap-1 py-1 mb-8">
                    Aura<span className="text-white">Tech</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link to="/dashboard/overview" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 rounded-lg transition-colors font-medium">
                            <FiGrid className="text-xl" />
                            Overview
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 rounded-lg transition-colors font-medium">
                            <FiHome className="text-xl" />
                            Back to Home
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Logout Button */}
            <div className="p-6">
                <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:text-rose-300 rounded-lg font-semibold transition-colors">
                    <FiLogOut className="text-xl" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;