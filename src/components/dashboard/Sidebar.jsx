import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white w-full h-full border-r border-slate-200 shadow-sm flex flex-col justify-between">
      
      <div className="p-6">
        <h2 className="text-2xl font-bold text-indigo-600 mb-8 ml-2">AuraTech</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/dashboard" className="block px-4 py-3 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-medium">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/dashboard/my-products" className="block px-4 py-3 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-medium">
              My Products
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-product" className="block px-4 py-3 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-medium">
              Add Product
            </Link>
          </li>
          <div className="divider my-2"></div>
          <li>
            <Link to="/" className="block px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors font-medium">
              Back to Home
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-6">
        <button className="w-full py-3 px-4 bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-700 rounded-lg font-semibold transition-colors">
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;