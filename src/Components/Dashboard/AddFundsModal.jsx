import React from 'react';
import './Styles/addfunds.css';

export default function AddFundsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="addfunds-overlay">
      <div className="addfunds-box">
        <h3 className="text-lg font-semibold">Add Funds</h3>
        <p className="text-sm text-slate-600 mt-2">This is a placeholder. Integrate payment gateway here.</p>
        <div className="addfunds-actions">
          <button onClick={onClose} className="addfunds-cancel">Cancel</button>
          <button onClick={() => { alert('Add funds placeholder'); onClose(); }} className="addfunds-confirm">Add</button>
        </div>
      </div>
    </div>
  );
}
