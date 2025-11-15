import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Public Components
import Header from './Components/Header/Header';
import Landingpage from './Components/Landingpage/Landingpage';
import Services from './Pages/SERVICES/Services';
import Blogs from './Pages/BLOGS/Blogs';
import Terms from './Pages/TERMS & CONDITIONS/TermConditions';
import Contact from './Pages/CONTACT US/Contact';
import Reviews from './Components/Reviews/Reviews';

// Auth Components
import LoginModal from './Components/modals/LoginModal';
import SignupModal from './Components/modals/SignupModal';
import ForgotPassword from './Components/modals/ForgotPassword';
import ResetPassword from './Components/modals/RESET-PASSWORD';
import OTPVerification from './Components/modals/OTPVerification';
import PasswordChange from './Components/modals/Password-change';

// Dashboard Components
import DashboardLayout from './Components/Dashboard/DashboardLayout';
import NewOrder from './Pages/Dashboard/NewOrder';
import OrderHistory from './Pages/Dashboard/OrderHistory';
import ServicesDashboard from './Pages/Dashboard/ServicesDashboard';
import BlogsDashboard from './Pages/Dashboard/BlogsDashboard';
import TermsDashboard from './Pages/Dashboard/TermsDashboard';
import FundsDashboard from './Pages/Dashboard/FundsDashboard';

// Public Layout Component
const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with shared header */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>

        {/* Auth routes - no layout wrapper */}
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<OTPVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-change" element={<PasswordChange />} />

        {/* Dashboard routes - completely separate */}
        <Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<NewOrder />} />
          <Route path="new-order" element={<NewOrder />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="services" element={<ServicesDashboard />} />
          <Route path="blogs" element={<BlogsDashboard />} />
          <Route path="terms" element={<TermsDashboard />} />
          <Route path="funds" element={<FundsDashboard />} />
          <Route path="logout" element={<Navigate to="/" replace />} />
        </Route>

        {/* Catch all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
