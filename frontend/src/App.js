import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';           // ← Yeh import zaroori hai
import store from './redux/store';                // Redux Store

import Layout from "./layout/Layout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import FacilitiesPage from "./components/FacilitiesPage";
import TeachersPage from "./components/TeachersPage";
import EventsPage from "./components/EventsPage";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";


import AuthPage from './components/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Unauthorized from './pages/Unauthorized';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Provider store={store}>          {/* ← Redux Provider */}
      <Router>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/facilities" element={<Layout><FacilitiesPage /></Layout>} />
          <Route path="/teachers" element={<Layout><TeachersPage /></Layout>} />
          <Route path="/events" element={<Layout><EventsPage /></Layout>} />
          <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

          {/* Auth Route */}
          <Route path="/auth" element={<Layout><AuthPage /></Layout>} />
          <Route path="/forgot-password" element={<Layout><ForgotPassword /></Layout>} />
          <Route path="/reset-password/:token" element={<Layout><ResetPassword /></Layout>} />

          {/* Protected Role-based Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
          </Route>

          {/* Common Protected Route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/unauthorized" element={<Unauthorized />} />
          
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;