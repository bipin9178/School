import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, LogOut } from 'lucide-react';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 text-center">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
          <AlertTriangle size={36} className="text-red-600 sm:w-10 sm:h-10" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Access Denied
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
          You don't have permission to access this page.
        </p>

        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center gap-2 transition text-sm sm:text-base"
          >
            <Home size={18} />
            Go to Home
          </button>

          <button
            onClick={() => navigate('/auth')}
            className="w-full border border-gray-300 hover:bg-gray-50 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-center gap-2 transition text-sm sm:text-base"
          >
            <LogOut size={18} />
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;