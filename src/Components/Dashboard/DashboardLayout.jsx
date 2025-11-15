import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import AddFundsModal from './AddFundsModal';
import './Styles/layout.css';

export default function DashboardLayout() {
  const [fundsOpen, setFundsOpen] = React.useState(false);

  return (
    <div className="dashboard-container">
      <Sidebar onAddFunds={() => setFundsOpen(true)} />
      <Header />

      <main className="dashboard-main">
        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>

      <AddFundsModal open={fundsOpen} onClose={() => setFundsOpen(false)} />
    </div>
  );
}
