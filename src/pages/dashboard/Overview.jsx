import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import { FiBox, FiShoppingCart, FiActivity, FiTrendingUp } from "react-icons/fi";

const Overview = () => {
    const { user } = useAuth();
    const userData = useUserData();

    const userName = user?.displayName || "AuraTech User";

    return (
        <div className="w-full animation-fade-in">

            <div className="w-full animation-fade-in">

                {/* Header Section */}

                <div className="mb-10">

                    <h2 className="text-3xl font-bold text-slate-100 mb-2">

                        Welcome back, <span className="text-indigo-400">{userName}</span>

                    </h2>

                    <p className="text-slate-400">

                        Here is what's happening with your store today.

                    </p>

                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-sm mt-10">
                    <h3 className="text-xl font-semibold text-slate-200 mb-6">Profile Information</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold text-white border-4 border-slate-800 shadow-lg">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover" />
                            ) : (
                                userName.slice(0, 2).toUpperCase()
                            )}
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-300"><span className="text-slate-500 w-24 inline-block">Name:</span> {userName}</p>
                            <p className="text-slate-300"><span className="text-slate-500 w-24 inline-block">Email:</span> {user?.email || "No email linked"}</p>

                            <p className="text-slate-300">
                                <span className="text-slate-500 w-24 inline-block">Role:</span>
                                <span className="capitalize text-indigo-400 font-medium">{userData?.role || "Loading..."}</span>
                            </p>

                            <p className="text-slate-300"><span className="text-slate-500 w-24 inline-block">Status:</span> <span className="text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-400/10">Active</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
};

            export default Overview;