import React from 'react';
import './Styles/sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar({ onAddFunds }) {
  const navigate = useNavigate();
  
  const links = [
    { to: '/dashboard/new-order', label: 'New Order', emoji: '🟢' },
    { to: '/dashboard/order-history', label: 'Order History', emoji: '📄' },
    { to: '/dashboard/services', label: 'Services', emoji: '🧩' },
    { to: '/dashboard/blogs', label: 'Blogs', emoji: '📰' },
    { to: '/dashboard/terms', label: 'Terms', emoji: '⚖️' },
    { to: '/dashboard/funds', label: 'Funds', emoji: '💰' },
  ];

  const handleLogout = () => {
    // Add any logout logic here (clear tokens etc)
    navigate('/dashboard/logout');
  };

  return (
    <aside className="dashboard-sidebar">
      <div className="mb-6">
        <div className="funds-box">
          <div className="funds-label">Available Funds</div>
          <div className="funds-amount">$5,000</div>
          <button onClick={onAddFunds} className="funds-add-btn">Add Funds</button>
        </div>
      </div>

      <nav className="dashboard-nav">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            <span className="text-lg">{l.emoji}</span>
            <span className="font-medium">{l.label}</span>
          </NavLink>
        ))}

        <button onClick={handleLogout} className="logout-btn">
          <span className="text-lg">🚪</span>
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </aside>
  );
}
