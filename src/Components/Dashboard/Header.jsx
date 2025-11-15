import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Settings, Plus } from "lucide-react";
import "./Styles/header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="dashboard-header">
      {/* Brand */}
      <div className="brand">
        <span className="brand-text">ServicesApp</span>
        <span className="brand-badge">Dashboard</span>
      </div>

      {/* Center Button */}
      <div className="header-center">
        <button
          onClick={() => navigate("/dashboard/new-order")}
          className="new-order-btn"
        >
          <Plus size={18} />
          <span>New Order</span>
        </button>
      </div>

      {/* Action Buttons */}
      <div className="header-actions">
        <button className="icon-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-dot" />
        </button>

        <button className="icon-btn" aria-label="Settings">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}
