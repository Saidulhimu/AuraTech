import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import GoogleLogin from '../components/login-registration/googleLogin';

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email address is already registered. Please log in instead.';
      case 'auth/invalid-email':
        return 'The email address provided is invalid.';
      case 'auth/weak-password':
        return 'Password is too weak. Please use at least 6 characters.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';
      default:
        return 'Failed to create account. Please try again later.';
    }
  };

  const onSubmit = (data) => {
    setError('');
    setLoading(true);

    const email = data.email;
    const role = data.role;
    const status = role === 'buyer' ? 'approved' : 'pending';
    const wishlist = [];

    const userData = { email, role, status, wishlist };

    // 1. Firebase Authentication
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name)
          .then(() => {
            // 2. Post User Data to Backend Database
            axios
              .post('http://localhost:4000/users', userData)
              .then((res) => {
                if (res.data.insertedId || res.data.message) {
                  setLoading(false);
                  navigate('/');
                }
              })
              .catch((err) => {
                setError('Failed to save user info to database.');
                setLoading(false);
              });
          })
          .catch((err) => {
            setError(getErrorMessage(err.code));
            setLoading(false);
          });
      })
      .catch((err) => {
        setError(getErrorMessage(err.code));
        setLoading(false);
      });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 shadow-2xl shadow-indigo-500/10 backdrop-blur-2xl transition-all duration-500">

        {/* LEFT SIDE: AuraTech Showcase */}
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

            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Create Account</h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in details to register your AuraTech account.
              </p>
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-3 rounded-xl text-xs font-medium text-center transition-all animate-fade-in">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  {...register('name', { required: true })}
                  className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
                />
                {errors.name && (
                  <p className="text-rose-400 text-xs mt-1">Full Name is required</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your E-Mail"
                  {...register('email', { required: true })}
                  className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
                />
                {errors.email && (
                  <p className="text-rose-400 text-xs mt-1">Email is required</p>
                )}
              </div>

              {/* ROLE SELECT RADIO CARDS */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Your Role 
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative flex flex-col p-3 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-800/50 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-950/30 transition-all">
                    <input
                      type="radio"
                      value="buyer"
                      defaultChecked
                      {...register('role', { required: true })}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold text-slate-200">🛒 Buyer</span>
                  </label>

                  <label className="relative flex flex-col p-3 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-slate-800/50 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-950/30 transition-all">
                    <input
                      type="radio"
                      value="seller"
                      {...register('role', { required: true })}
                      className="sr-only"
                    />
                    <span className="text-xs font-bold text-slate-200">🏪 Seller</span>
                  </label>
                </div>
                {errors.role && (
                  <p className="text-rose-400 text-xs mt-1">Please select a role</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Minimum 6 characters"
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*[A-Z])(?=.*[a-z])/,
                    })}
                    className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-indigo-400 text-xs font-semibold transition-colors select-none"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password?.type === 'required' && (
                  <p className="text-rose-400 text-xs mt-1">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-rose-400 text-xs mt-1">Password must be at least 6 characters</p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-rose-400 text-xs mt-1">Must contain at least one uppercase and one lowercase letter</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    {...register('confirmPassword', {
                      required: true,
                      validate: (value) =>
                        value === watch('password') || 'Passwords do not match',
                    })}
                    className="w-full bg-slate-950/90 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-indigo-400 text-xs font-semibold transition-colors select-none"
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.confirmPassword?.type === 'required' && (
                  <p className="text-rose-400 text-xs mt-1">Confirm password is required</p>
                )}
                {errors.confirmPassword?.message && errors.confirmPassword?.type !== 'required' && (
                  <p className="text-rose-400 text-xs mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 active:scale-[0.99] text-white font-semibold py-3 rounded-xl transition-all text-sm shadow-lg shadow-indigo-600/25 mt-2 disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Register'}
              </button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-900 px-3 text-slate-500 font-medium">Or Register With</span>
              </div>
            </div>

            {/* Reusable Google Login Component */}
            <GoogleLogin onError={(err) => setError(getErrorMessage(err.code))} />

            <div className="text-center pt-2">
              <p className="text-xs text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-bold underline underline-offset-4 transition-colors">
                  Log In
                </Link>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;