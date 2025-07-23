import React from 'react';

const LoginModal = ({ isOpen, onClose, mode, setMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          {mode === 'login' ? 'Login to WanderMap' : 'Create Account'}
        </h2>

        <form className="space-y-4">
          {mode === 'signup' && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-md"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button onClick={() => setMode('signup')} className="text-blue-600 underline">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setMode('login')} className="text-blue-600 underline">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
