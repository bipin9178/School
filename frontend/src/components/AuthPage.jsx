import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../redux/slices/authSlice';
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", password: "", role: "student"
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const result = await dispatch(loginUser({ 
        email: formData.email, 
        password: formData.password 
      }));

      if (!result.error) {
        const user = result.payload.user;
        if (user.role === 'admin') navigate('/admin/dashboard');
        else if (user.role === 'teacher') navigate('/teacher/dashboard');
        else if (user.role === 'student') navigate('/student/dashboard');
        else navigate('/profile');
      }
    } else {
      const result = await dispatch(registerUser(formData));
      if (!result.error) {
        alert("Registration Successful! Please Login Now.");
        setIsLogin(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 sm:p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side – hidden on mobile, visible on md+ */}
        <div className="hidden md:flex w-5/12 bg-blue-700 relative min-h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=1000" 
            alt="School" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 to-blue-950/90"></div>
          <div className="relative z-10 p-8 flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-4">Welcome to<br />Bright Future School</h2>
            <p className="text-blue-100 text-base">Providing Quality Education Since 2010</p>
          </div>
        </div>

        {/* Right Side – form */}
        <div className="w-full md:w-7/12 p-5 sm:p-8 md:p-10">
          {/* Toggle buttons */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  isLogin ? 'bg-white shadow text-blue-700' : 'text-gray-600'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  !isLogin ? 'bg-white shadow text-blue-700' : 'text-gray-600'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3 mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full p-3 sm:p-4 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="user">Parent</option>
                </select>
              </>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 sm:left-4 sm:top-4 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-9 sm:pl-12 p-3 sm:p-4 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 sm:left-4 sm:top-4 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-9 sm:pl-12 p-3 sm:p-4 text-sm sm:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 sm:right-4 sm:top-4 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>

            {/* Forgot Password Link – only for login mode */}
            {isLogin && (
              <div className="text-right">
                <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">
                  Forgot Password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition disabled:opacity-70"
            >
              {loading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;