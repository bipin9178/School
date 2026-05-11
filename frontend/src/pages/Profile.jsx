import React, { useState, useEffect } from 'react'; // ✅ added useState
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile, logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Calendar, MapPin, LogOut, Edit, Lock } from 'lucide-react'; // ✅ added Lock
import ChangePasswordModal from './ChangePasswordModal'; // adjust path if needed

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token, loading } = useSelector((state) => state.auth);
  const [isChangePwOpen, setIsChangePwOpen] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(fetchProfile());
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl sm:text-2xl text-gray-600">Loading Profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-600">Please login first</p>
          <button
            onClick={() => navigate('/auth')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
        {/* Header gradient bar */}
        <div className="h-36 sm:h-48 md:h-56 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative">
          <div className="absolute -bottom-10 left-4 sm:left-6 md:left-8 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-2xl sm:rounded-3xl p-1.5 shadow-xl">
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="pt-14 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 pb-8 sm:pb-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">
                {user.name}
              </h1>
              <p className="text-indigo-600 text-base sm:text-lg md:text-xl mt-1 capitalize">
                {user.role} {user.class && `• ${user.class}`}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsChangePwOpen(true)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:bg-gray-300 transition"
              >
                <Lock size={16} /> Change Password
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-xl hover:bg-red-200 transition text-sm"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <Mail className="text-gray-400 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Email</p>
                  <p className="font-medium text-sm sm:text-base break-all">{user.email}</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <Phone className="text-gray-400 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-sm sm:text-base">
                    {user.phone || "Not Provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <Calendar className="text-gray-400 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Joined On</p>
                  <p className="font-medium text-sm sm:text-base">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <MapPin className="text-gray-400 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Location</p>
                  <p className="font-medium text-sm sm:text-base">Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordModal isOpen={isChangePwOpen} onClose={() => setIsChangePwOpen(false)} />
    </div>
  );
};

export default Profile;