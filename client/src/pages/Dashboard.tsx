import React from 'react';
import logo from './../logo.svg';
import './Dashboard.less';

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        <p>
          Edit <code>src/Dashboard.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          DASHBOARD
        </a>
      </header>
    </div>
  );
}

export default Dashboard;
