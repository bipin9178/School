import React, { useState, useEffect } from 'react';
import { 
  Users, UserCheck, DollarSign, AlertTriangle, 
  Calendar, Bell, Search, LogOut, Plus, Award, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
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
    { id: 'dashboard', icon: Users, label: "Dashboard" },
    { id: 'students', icon: Users, label: "Students" },
    { id: 'teachers', icon: UserCheck, label: "Teachers" },
    { id: 'attendance', icon: Calendar, label: "Attendance" },
    { id: 'fees', icon: DollarSign, label: "Fees" },
    { id: 'events', icon: Calendar, label: "Events" },
    { id: 'calendar', icon: Calendar, label: "Calendar" },
    { id: 'reports', icon: Award, label: "Reports" },
  ];

  // Dummy Data
  const stats = [
    { title: "Total Students", value: "1,250", icon: Users, color: "blue", change: "+12%" },
    { title: "Total Teachers", value: "85", icon: UserCheck, color: "green", change: "+3%" },
    { title: "Fees Collected", value: "₹15,75,000", icon: DollarSign, color: "emerald", change: "92%" },
    { title: "Pending Fees", value: "₹2,45,000", icon: AlertTriangle, color: "orange", change: "8%" },
  ];

  const students = [
    { name: "Riya Sharma", class: "5th", phone: "9876543210", status: "Paid" },
    { name: "Aarav Patel", class: "6th", phone: "9876543211", status: "Pending" },
    { name: "Vivan Mehta", class: "7th", phone: "9876543212", status: "Paid" },
    { name: "Ananya Singh", class: "5th", phone: "9876543213", status: "Pending" },
  ];

  const teachers = [
    { name: "Mr. Amit Patel", subject: "Maths", phone: "9876543201", salary: "₹25,000" },
    { name: "Mrs. Neha Shah", subject: "Science", phone: "9876543202", salary: "₹28,000" },
    { name: "Mr. Rajesh Kumar", subject: "English", phone: "9876543203", salary: "₹24,000" },
  ];

  const upcomingEvents = [
    { date: "12 May 2025", name: "Annual Day", status: "Upcoming" },
    { date: "15 May 2025", name: "Teachers Day", status: "Upcoming" },
    { date: "20 May 2025", name: "Sports Day", status: "Upcoming" },
  ];

  const feesData = [
    { month: "Jan", collected: 1200000, pending: 300000 },
    { month: "Feb", collected: 1350000, pending: 250000 },
    { month: "Mar", collected: 1480000, pending: 280000 },
    { month: "Apr", collected: 1520000, pending: 220000 },
    { month: "May", collected: 1575000, pending: 245000 },
  ];

  // Helper for dynamic Tailwind classes (using exact colors)
  const getStatColor = (color) => {
    switch(color) {
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'green': return 'bg-green-100 text-green-600';
      case 'emerald': return 'bg-emerald-100 text-emerald-600';
      case 'orange': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
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
            className="fixed lg:relative z-40 w-64 bg-blue-900 text-white flex flex-col shadow-2xl h-full overflow-y-auto"
          >
            <div className="p-5 flex items-center justify-between border-b border-blue-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-blue-900 font-bold text-xl">E</div>
                <h1 className="text-xl font-bold">EduSchool</h1>
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                    activeTab === item.id ? 'bg-blue-800 shadow-lg' : 'hover:bg-blue-800/50'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </nav>

            <div className="p-4 border-t border-blue-800 mt-auto">
              <button onClick={handleLogout} className="flex items-center gap-3 text-red-400 hover:bg-blue-800 w-full px-4 py-3 rounded-xl transition">
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
              <div className="relative hidden sm:block w-64 lg:w-96">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                <input type="text" placeholder="Search students, teachers..." className="w-full pl-10 pr-3 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <button className="relative p-2 hover:bg-gray-100 rounded-xl">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-[9px] flex items-center justify-center text-white">3</span>
              </button>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-right hidden xs:block">
                  <p className="text-sm font-semibold">Admin</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {activeTab === 'dashboard' && (
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">Welcome back, Admin! 👋</h1>
              <p className="text-gray-600 text-sm sm:text-base mb-6">Here's what's happening at Bright Future School today.</p>

              {/* Stats Cards - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {stats.map((stat, i) => (
                  <motion.div key={i} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-500 text-xs sm:text-sm">{stat.title}</p>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-1">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${getStatColor(stat.color)} rounded-xl flex items-center justify-center`}>
                        <stat.icon size={22} />
                      </div>
                    </div>
                    <p className="text-emerald-600 text-xs sm:text-sm mt-3">↑ {stat.change} from last month</p>
                  </motion.div>
                ))}
              </div>

              {/* Charts - Responsive */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm">
                  <h3 className="font-semibold text-sm sm:text-base mb-3">Attendance Summary</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={[{name:"Present",value:85},{name:"Absent",value:15}]} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value" label={({name, percent}) => `${name} ${(percent*100).toFixed(0)}%`}>
                          <Cell fill="#10b981" />
                          <Cell fill="#ef4444" />
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm lg:col-span-2">
                  <h3 className="font-semibold text-sm sm:text-base mb-3">Fees Overview</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={feesData}>
                        <XAxis dataKey="month" fontSize={12} />
                        <YAxis fontSize={12} />
                        <Tooltip />
                        <Bar dataKey="collected" fill="#3b82f6" radius={[8,8,0,0]} />
                        <Bar dataKey="pending" fill="#f97316" radius={[8,8,0,0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Students Management</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700 text-sm">
                  <Plus size={18} /> Add Student
                </button>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Name</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Class</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Phone</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Fees Status</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((s, i) => (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="p-3 sm:p-4 text-sm font-medium">{s.name}</td>
                        <td className="p-3 sm:p-4 text-sm">{s.class}</td>
                        <td className="p-3 sm:p-4 text-sm">{s.phone}</td>
                        <td className="p-3 sm:p-4">
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs ${s.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                            {s.status}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4">
                          <button className="text-blue-600 hover:underline text-sm">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'teachers' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Teachers Management</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700 text-sm">
                  <Plus size={18} /> Add Teacher
                </button>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Name</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Subject</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Phone</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Salary</th>
                      <th className="text-left p-3 sm:p-4 text-sm font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((t, i) => (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="p-3 sm:p-4 text-sm font-medium">{t.name}</td>
                        <td className="p-3 sm:p-4 text-sm">{t.subject}</td>
                        <td className="p-3 sm:p-4 text-sm">{t.phone}</td>
                        <td className="p-3 sm:p-4 text-sm">{t.salary}</td>
                        <td className="p-3 sm:p-4">
                          <button className="text-blue-600 hover:underline text-sm">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Attendance Management</h2>
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                <p className="text-lg sm:text-xl">Mark Attendance for Today</p>
                <button className="mt-5 bg-green-600 text-white px-6 sm:px-10 py-2 sm:py-3 rounded-xl text-sm sm:text-base">Mark All Present</button>
              </div>
            </div>
          )}

          {activeTab === 'fees' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Fees Management</h2>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
                <div className="h-80 sm:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={feesData}>
                      <XAxis dataKey="month" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Bar dataKey="collected" fill="#10b981" radius={[8,8,0,0]} name="Collected" />
                      <Bar dataKey="pending" fill="#f59e0b" radius={[8,8,0,0]} name="Pending" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">School Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm">
                    <p className="text-blue-600 font-mono text-sm">{event.date}</p>
                    <h3 className="text-lg sm:text-xl font-bold mt-2">{event.name}</h3>
                    <span className="inline-block mt-3 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">Upcoming</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'calendar' && (
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 text-center">
              <h2 className="text-xl sm:text-3xl font-bold mb-4">School Calendar</h2>
              <p className="text-gray-600 text-sm sm:text-base">May 2025 Calendar with Holidays & Events</p>
            </div>
          )}

          {activeTab === 'reports' && (
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">Reports & Analytics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm text-center">
                  <p className="text-sm sm:text-base font-medium">Attendance Report (PDF)</p>
                  <button className="mt-4 text-blue-600 underline text-sm">Download</button>
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm text-center">
                  <p className="text-sm sm:text-base font-medium">Fees Collection Report</p>
                  <button className="mt-4 text-blue-600 underline text-sm">Download</button>
                </div>
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

export default AdminDashboard;