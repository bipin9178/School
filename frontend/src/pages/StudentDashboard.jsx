import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Calendar, Award, Clock, Users, 
  Bell, LogOut, CheckCircle, User, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('subjects');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth');
  };

  const menuItems = [
    { id: 'subjects', icon: BookOpen, label: "My Subjects" },
    { id: 'attendance', icon: Calendar, label: "Attendance" },
    { id: 'results', icon: Award, label: "Results" },
    { id: 'timetable', icon: Clock, label: "Timetable" },
    { id: 'classmates', icon: Users, label: "Classmates" },
    { id: 'notifications', icon: Bell, label: "Notifications" },
  ];

  // Dummy Data
  const subjects = [
    { name: "Mathematics", teacher: "Mr. Amit Patel", marks: "92", grade: "A+", time: "08:30 AM" },
    { name: "Science", teacher: "Mrs. Neha Shah", marks: "88", grade: "A", time: "10:30 AM" },
    { name: "English", teacher: "Mr. Rajesh Kumar", marks: "95", grade: "A+", time: "01:00 PM" },
    { name: "Hindi", teacher: "Mrs. Pooja Verma", marks: "85", grade: "B+", time: "02:30 PM" },
  ];

  const attendanceData = [
    { name: "Present", value: 92, color: "#10b981" },
    { name: "Absent", value: 8, color: "#ef4444" },
  ];

  const monthlyAttendance = [
    { month: "Jan", present: 95 }, { month: "Feb", present: 88 },
    { month: "Mar", present: 92 }, { month: "Apr", present: 90 },
    { month: "May", present: 94 }
  ];

  const results = [
    { exam: "Unit Test 1", total: 100, obtained: 92, percentage: "92%" },
    { exam: "Mid Term", total: 100, obtained: 87, percentage: "87%" },
    { exam: "Unit Test 2", total: 100, obtained: 94, percentage: "94%" },
  ];

  const timetable = [
    { day: "Monday", subjects: ["Math", "Science", "English", "Hindi"] },
    { day: "Tuesday", subjects: ["Science", "Math", "Hindi", "English"] },
    { day: "Wednesday", subjects: ["English", "Hindi", "Math", "Science"] },
  ];

  const classmates = [
    { name: "Aarav Patel", roll: "01", avatar: "AP" },
    { name: "Vivan Mehta", roll: "05", avatar: "VM" },
    { name: "Ananya Singh", roll: "08", avatar: "AS" },
    { name: "Diya Sharma", roll: "10", avatar: "DS" },
  ];

  const notifications = [
    { title: "Annual Day Rehearsal", time: "2 hours ago", type: "event" },
    { title: "Fees Reminder", time: "Yesterday", type: "fee" },
    { title: "Science Project Submission", time: "3 days ago", type: "assignment" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - off-canvas on mobile, fixed on desktop */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed lg:relative z-40 w-64 bg-teal-900 text-white flex flex-col shadow-2xl h-full overflow-y-auto"
          >
            <div className="p-5 flex items-center justify-between border-b border-teal-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center text-teal-900 font-bold text-xl">S</div>
                <h1 className="text-xl font-bold">Student Portal</h1>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 p-3 space-y-1">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all ${
                    activeTab === item.id ? 'bg-teal-800 shadow-lg' : 'hover:bg-teal-800/60'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-teal-800 mt-auto">
              <button onClick={handleLogout} className="flex items-center gap-3 text-red-400 hover:bg-teal-800 w-full px-4 py-3 rounded-2xl transition">
                <LogOut size={20} />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar - Responsive */}
        <div className="bg-white border-b px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-xl text-gray-700"
                aria-label="Toggle menu"
              >
                <Menu size={22} />
              </button>
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg font-semibold text-gray-800">Welcome back, Riya Sharma 👋</h1>
                <p className="text-xs text-gray-500">Class 5th • Section A • Roll No. 12</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-sm font-semibold">Riya Sharma</h1>
                <p className="text-xs text-gray-500">Class 5-A</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              {/* Notifications Icon */}
              <button className="relative p-2 hover:bg-gray-100 rounded-xl">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">4</span>
              </button>

              {/* Profile */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-right hidden xs:block">
                  <p className="text-sm font-semibold">Riya Sharma</p>
                  <p className="text-xs text-teal-600">Student</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">RS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {activeTab === 'subjects' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">My Subjects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {subjects.map((sub, i) => (
                  <motion.div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold">{sub.name}</h3>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">Teacher: {sub.teacher}</p>
                      </div>
                      <span className="text-teal-600 font-bold text-base sm:text-lg">{sub.marks}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-3">Next Class: {sub.time}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Attendance Record</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                  <h3 className="font-semibold text-base sm:text-lg mb-3">Overall Attendance</h3>
                  <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={attendanceData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" label={({name, percent}) => `${name} ${(percent*100).toFixed(0)}%`}>
                          {attendanceData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                  <h3 className="font-semibold text-base sm:text-lg mb-3">Monthly Trend</h3>
                  <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyAttendance}>
                        <XAxis dataKey="month" fontSize={12} />
                        <YAxis fontSize={12} />
                        <Tooltip />
                        <Bar dataKey="present" fill="#14b8a6" radius={8} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Academic Results</h2>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead className="border-b bg-gray-50">
                    <tr>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Exam</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Total</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Obtained</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-3 sm:p-4 text-sm font-medium">{result.exam}</td>
                        <td className="p-3 sm:p-4 text-sm">{result.total}</td>
                        <td className="p-3 sm:p-4 text-sm">{result.obtained}</td>
                        <td className="p-3 sm:p-4 text-teal-600 font-bold text-sm">{result.percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'timetable' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Weekly Timetable</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {timetable.map((day, i) => (
                  <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 text-teal-700">{day.day}</h3>
                    <ul className="space-y-2">
                      {day.subjects.map((sub, idx) => (
                        <li key={idx} className="bg-gray-50 p-2 sm:p-3 rounded-lg text-sm sm:text-base">{sub}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'classmates' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">My Classmates</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {classmates.map((student, i) => (
                  <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold mb-3">
                      {student.avatar}
                    </div>
                    <h4 className="font-semibold text-sm sm:text-base">{student.name}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">Roll No. {student.roll}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Notifications</h2>
              <div className="space-y-3 sm:space-y-4 max-w-2xl">
                {notifications.map((notif, i) => (
                  <div key={i} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3 sm:gap-4 shadow-sm">
                    <Bell className="text-teal-600 mt-0.5 w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">{notif.title}</p>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile overlay when sidebar is open */}
      {sidebarOpen && window.innerWidth < 1024 && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default StudentDashboard;