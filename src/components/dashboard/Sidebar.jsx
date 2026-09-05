import { Link } from "react-router-dom";
import { FiGrid, FiHome, FiLogOut } from "react-icons/fi";
import { MdOutlineInventory2, MdAddCircleOutline } from "react-icons/md";
import useUserData from "../../hooks/useUserData";
import useAuth from "../../hooks/useAuth";

const sellerRoutes = [
    {
        id: 1,
        route: "/dashboard/my-products",
        name: "My Products",
        icon: <MdOutlineInventory2 className="text-xl" />,
    },
    {
        id: 2,
        route: "/dashboard/add-products",
        name: "Add Products",
        icon: <MdAddCircleOutline className="text-xl" />,
    },
];



const Sidebar = () => {
    const userData = useUserData();
    const { Logout } = useAuth();

    return (
        <div className="bg-slate-900 w-full h-full border-r border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="p-6">
                <Link to="/" className="text-2xl font-black tracking-wider text-indigo-400 flex items-center gap-1 py-1 mb-8">
                    Aura<span className="text-white">Tech</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></span>
                </Link>

                <ul className="flex flex-col gap-2">
                    <li>
                        <Link to="/dashboard/overview" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 rounded-lg transition-colors font-medium">
                            <FiGrid className="text-xl" />
                            Overview
                        </Link>
                    </li>

                    {userData?.role === "seller" && sellerRoutes.map((route) => (
                        <li key={route.id}>
                            <Link to={route.route} className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 rounded-lg transition-colors font-medium">
                                <>{route.icon}</>
                                <p>{route.name}</p>
                            </Link>
                        </li>
                    ))}

                    <li>
                        <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 rounded-lg transition-colors font-medium">
                            <FiHome className="text-xl" />
                            Back to Home
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="p-6">
                <button onClick={Logout} className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-red-500 hover:text-white rounded-lg transition-colors font-medium ">
                    <FiLogOut className="text-xl" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;