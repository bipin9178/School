import React, { useState, useEffect } from 'react';
import { 
  Users, Calendar, BookOpen, Award, Clock, 
  Bell, LogOut, CheckCircle, Plus, User, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('myclasses');
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
    { id: 'myclasses', icon: Users, label: "My Classes" },
    { id: 'attendance', icon: Calendar, label: "Attendance" },
    { id: 'assignments', icon: BookOpen, label: "Assignments" },
    { id: 'results', icon: Award, label: "Results" },
    { id: 'timetable', icon: Clock, label: "Timetable" },
    { id: 'notifications', icon: Bell, label: "Notifications" },
  ];

  // Dummy Data
  const todayClasses = [
    { time: "08:30 AM", subject: "Mathematics", class: "5th A", students: 42, status: "Upcoming" },
    { time: "10:30 AM", subject: "Mathematics", class: "6th B", students: 38, status: "Ongoing" },
    { time: "01:00 PM", subject: "Mathematics", class: "7th A", students: 45, status: "Completed" },
  ];

  const attendanceTrend = [
    { day: "Mon", present: 92 }, { day: "Tue", present: 88 },
    { day: "Wed", present: 95 }, { day: "Thu", present: 89 }, { day: "Fri", present: 93 }
  ];

  const assignments = [
    { title: "Chapter 8 - Fractions", class: "5th A", due: "10 May", status: "Submitted" },
    { title: "Science Project", class: "6th B", due: "12 May", status: "Pending" },
    { title: "Essay Writing", class: "7th A", due: "15 May", status: "Submitted" },
  ];

  const results = [
    { class: "5th A", avgMarks: "89", totalStudents: 42 },
    { class: "6th B", avgMarks: "85", totalStudents: 38 },
    { class: "7th A", avgMarks: "91", totalStudents: 45 },
  ];

  const timetable = [
    { day: "Monday", periods: ["5A Math", "6B Math", "7A Math"] },
    { day: "Tuesday", periods: ["5A Math", "6B Science", "7A Math"] },
    { day: "Wednesday", periods: ["5A Hindi", "6B Math", "7A English"] },
  ];

  const notifications = [
    { title: "Annual Day Meeting", time: "1 hour ago" },
    { title: "Fees Pending List Updated", time: "Yesterday" },
    { title: "Parent-Teacher Meeting Reminder", time: "2 days ago" },
  ];

  // Helper to get status color classes
  const getStatusClass = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Ongoing': return 'bg-blue-100 text-blue-700';
      default: return 'bg-amber-100 text-amber-700';
    }
  };

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
            className="fixed lg:relative z-40 w-64 bg-indigo-900 text-white flex flex-col shadow-2xl h-full overflow-y-auto"
          >
            <div className="p-5 flex items-center justify-between border-b border-indigo-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center text-indigo-900 font-bold text-lg">TP</div>
                <h1 className="text-xl font-bold">Teacher Portal</h1>
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
                    activeTab === item.id ? 'bg-indigo-800 shadow-lg' : 'hover:bg-indigo-800/60'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-indigo-800 mt-auto">
              <button onClick={handleLogout} className="flex items-center gap-3 text-red-400 hover:bg-indigo-800 w-full px-4 py-3 rounded-2xl transition">
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
                <h1 className="text-base sm:text-lg font-semibold text-gray-800">Good Morning, Mr. Amit Patel 👋</h1>
                <p className="text-xs text-gray-500">Mathematics Teacher • Class 5th - 7th</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-sm font-semibold">Amit Patel</h1>
                <p className="text-xs text-gray-500">Teacher</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              {/* Notifications Icon */}
              <button className="relative p-2 hover:bg-gray-100 rounded-xl">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">5</span>
              </button>

              {/* Profile */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-right hidden xs:block">
                  <p className="text-sm font-semibold">Amit Patel</p>
                  <p className="text-xs text-emerald-600">Online</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">AP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {activeTab === 'myclasses' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Today's Schedule</h2>
              <div className="space-y-3 sm:space-y-4">
                {todayClasses.map((cls, i) => (
                  <div key={i} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                      <div className="font-mono font-bold text-sm sm:text-base bg-gray-100 px-3 py-1 rounded-full w-fit">{cls.time}</div>
                      <div>
                        <p className="text-base sm:text-lg font-semibold">{cls.subject} - {cls.class}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{cls.students} Students</p>
                      </div>
                    </div>
                    <span className={`inline-block w-fit px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusClass(cls.status)}`}>
                      {cls.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Attendance Overview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-base sm:text-lg mb-3">This Week Trend</h3>
                  <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={attendanceTrend}>
                        <XAxis dataKey="day" stroke="#888" fontSize={12} />
                        <YAxis stroke="#888" fontSize={12} />
                        <Tooltip />
                        <Line type="natural" dataKey="present" stroke="#4f46e5" strokeWidth={3} dot={{ r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm flex flex-col justify-center">
                  <h3 className="font-semibold text-base sm:text-lg mb-4">Quick Mark Attendance</h3>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition shadow-md">
                    Mark Today's Attendance
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Assignments</h2>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead className="border-b bg-gray-50">
                    <tr>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Assignment</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Class</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Due Date</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignments.map((ass, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-3 sm:p-4 text-sm font-medium">{ass.title}</td>
                        <td className="p-3 sm:p-4 text-sm">{ass.class}</td>
                        <td className="p-3 sm:p-4 text-sm">{ass.due}</td>
                        <td className="p-3 sm:p-4">
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs ${ass.status === 'Submitted' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                            {ass.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Class Performance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {results.map((res, i) => (
                  <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{res.class}</h3>
                    <p className="text-4xl sm:text-5xl font-bold text-indigo-600 my-3">{res.avgMarks}</p>
                    <p className="text-gray-500 text-sm">Average Marks</p>
                    <p className="text-xs text-gray-400 mt-2">{res.totalStudents} Students</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'timetable' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Weekly Timetable</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {timetable.map((day, i) => (
                  <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm">
                    <h3 className="text-lg sm:text-xl font-bold text-indigo-700 mb-4">{day.day}</h3>
                    <div className="space-y-2">
                      {day.periods.map((period, idx) => (
                        <div key={idx} className="bg-gray-50 p-2 sm:p-3 rounded-lg text-sm sm:text-base font-medium">{period}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Notifications</h2>
              <div className="max-w-2xl space-y-3 sm:space-y-4">
                {notifications.map((notif, i) => (
                  <div key={i} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl flex gap-3 sm:gap-4 items-start shadow-sm">
                    <Bell className="text-indigo-600 mt-0.5 w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{notif.title}</p>
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

export default TeacherDashboard;