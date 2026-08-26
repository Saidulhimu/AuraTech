import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSentVerification, setIsSentVerification] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setIsSentVerification(true);
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl transition-all duration-500">

                {/* LEFT SIDE: Productive Tech Banner */}
                <div className="relative hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-purple-950/80 via-slate-900 to-slate-950 border-r border-slate-800 overflow-hidden">
                    <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 w-64 h-64 bg-indigo-600/15 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                            Join AuraTech Family
                        </span>
                    </div>

                    <div className="relative z-10 my-auto py-6">
                        <div className="relative w-full h-52 mb-6 rounded-2xl overflow-hidden border border-slate-800 group shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                                alt="Productive Tech Ecosystem"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                            Start Your Smart Journey With <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">AuraTech</span>
                        </h1>
                        <p className="mt-3 text-slate-400 text-xs leading-relaxed">
                            Register your account today. Email verification ensures complete safety for your payment and order data.
                        </p>
                    </div>

                    <div className="relative z-10 pt-6 border-t border-slate-800/80 flex items-center justify-between text-slate-400 text-xs">
                        <p className="text-slate-400 text-xs">⚡ Fast Shipping Across Bangladesh</p>

                    </div>
                </div>

                {/* RIGHT SIDE: Register Form */}
                <div className="p-8 sm:p-12 flex flex-col justify-center bg-slate-900/60">
                    <div className="max-w-md w-full mx-auto space-y-6">

                        {isSentVerification ? (
                            <div className="text-center space-y-5 py-6">
                                <div className="w-20 h-20 bg-indigo-600/20 text-indigo-400 rounded-2xl flex items-center justify-center mx-auto border border-indigo-500/30 animate-bounce">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white">Verify Your Gmail</h2>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    We sent a verification link to <span className="text-indigo-400 font-semibold">{email}</span>. Please open your Gmail inbox, verify your account, and then log in.
                                </p>
                                <div className="pt-4">
                                    <Link
                                        to="/login"
                                        className="w-full inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 text-white font-semibold py-3 rounded-xl transition-all text-xs shadow-lg shadow-indigo-600/20"
                                    >
                                        Go to Login Page
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Create Account</h2>
                                    <p className="text-xs text-slate-400 mt-1">
                                        Fill in details to register your AuraTech account.
                                    </p>
                                </div>

                                <form onSubmit={handleRegister} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your Full Name"
                                            className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                            E-mail Address
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="yourname@example.com"
                                            className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Minimum 6 characters"
                                            className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 active:scale-[0.99] text-white font-semibold py-3 rounded-xl transition-all text-sm shadow-lg shadow-indigo-600/25 mt-2"
                                    >
                                        Register
                                    </button>

                                    <button className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-medium py-2.5 rounded-xl text-xs flex items-center justify-center gap-2.5 transition-all hover:bg-slate-900">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        Sign up with Google Account
                                    </button>
                                </form>

                                <div className="text-center pt-2">
                                    <p className="text-xs text-slate-400">
                                        Already have an account?{" "}
                                        <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-bold underline underline-offset-4 transition-colors">
                                            Log In
                                        </Link>
                                    </p>
                                </div>
                            </>
                        )}

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;