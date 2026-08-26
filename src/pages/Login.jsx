import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in:", email, password);
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Container Box */}
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl transition-all duration-500">

                {/* LEFT SIDE: Productive Tech Banner */}
                <div className="relative hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 border-r border-slate-800 overflow-hidden">
                    {/* Subtle Glows */}
                    <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl"></div>

                    {/* Top Badge */}
                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                            Next-Gen Tech Hub
                        </span>
                    </div>

                    {/* Clean Productive Image & Text */}
                    <div className="relative z-10 my-auto py-6">
                        <div className="relative w-full h-52 mb-6 rounded-2xl overflow-hidden border border-slate-800 group shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                                alt="Productive Workspace Setup"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                            Power Your Lifestyle With <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AuraTech</span>
                        </h1>
                        <p className="mt-3 text-slate-400 text-xs leading-relaxed">
                            Log in to unlock custom tech recommendations, order tracking, and priority support for all premium gadgets.
                        </p>
                    </div>

                    {/* Bottom Stats */}
                    <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-center justify-between text-slate-400 text-xs">
                        <div>
                            <p className="font-bold text-white text-base">10k+</p>
                            <p className="text-[11px] text-slate-500">Active Users</p>
                        </div>
                        <div className="h-8 w-[1px] bg-slate-800"></div>
                        <div>
                            <p className="font-bold text-white text-base">100%</p>
                            <p className="text-[11px] text-slate-500">Authentic Products</p>
                        </div>
                        <div className="h-8 w-[1px] bg-slate-800"></div>
                        <div>
                            <p className="font-bold text-white text-base">24/7</p>
                            <p className="text-[11px] text-slate-500">Tech Support</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Form */}
                <div className="p-8 sm:p-12 flex flex-col justify-center bg-slate-900/60">
                    <div className="max-w-md w-full mx-auto space-y-6">

                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
                            <p className="text-xs text-slate-400 mt-1">
                                Enter your verified credentials to access your account.
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                    Gmail Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="himu@example.com"
                                        className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all pl-10"
                                    />
                                    <svg className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                        Password
                                    </label>
                                    <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all pl-10 pr-10"
                                    />
                                    <svg className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300 text-xs font-semibold"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 active:scale-[0.99] text-white font-semibold py-3 rounded-xl transition-all text-sm shadow-lg shadow-indigo-600/25 mt-2"
                            >
                                Log In
                            </button>
                        </form>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-800"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-slate-900 px-3 text-slate-500 font-medium">Or Login With</span>
                            </div>
                        </div>

                        <button className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-medium py-2.5 rounded-xl text-xs flex items-center justify-center gap-2.5 transition-all hover:bg-slate-900">
                            <svg className="w-4 h-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                            </svg>
                            Log in with Google Account
                        </button>

                        <div className="text-center pt-2">
                            <p className="text-xs text-slate-400">
                                Don't have an account?{" "}
                                <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-bold underline underline-offset-4 transition-colors">
                                    Create an Account
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;