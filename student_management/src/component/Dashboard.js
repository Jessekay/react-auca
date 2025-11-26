import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview')

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: '📊', path: '/dashboard' },
    { id: 'students', label: 'Student List', icon: '👥', path: '/students' },
    { id: 'addition', label: 'Add Student', icon: '➕', path: '/addition' },
    { id: 'academic', label: 'Academic Units', icon: '🎓', path: '/academicUnit' },
    { id: 'login', label: 'Login', icon: '🔐', path: '/' }
  ]

  const dashboardStats = [
    { title: 'Total Students', value: '1,234', change: '+12%', color: '#4CAF50' },
    { title: 'Academic Units', value: '45', change: '+3%', color: '#2196F3' },
    { title: 'Active Courses', value: '89', change: '+8%', color: '#FF9800' },
    { title: 'Completed', value: '67%', change: '+5%', color: '#9C27B0' }
  ]

  const renderMainContent = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="overview-content">
            <div className="stats-grid">
              {dashboardStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="stat-title">{stat.title}</div>
                  <div className="stat-change" style={{ color: stat.color }}>{stat.change}</div>
                </div>
              ))}
            </div>
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">👤</span>
                  <span className="activity-text">New student John Doe registered</span>
                  <span className="activity-time">2 hours ago</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">📚</span>
                  <span className="activity-text">Computer Science unit updated</span>
                  <span className="activity-time">4 hours ago</span>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">✅</span>
                  <span className="activity-text">Monthly report generated</span>
                  <span className="activity-time">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="section-content">
            <h2>Welcome to the Student Management System</h2>
            <p>Use the navigation menu to access different sections of the application.</p>
          </div>
        )
    }
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>🎓 Student Management System</h1>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span className="user-name">Eric</span>
            <div className="user-avatar">E</div>
          </div>
        </div>
      </header>

      <div className="dashboard-body">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {navigationItems.map((item) => (
                <li key={item.id} className="nav-item">
                  {item.id === 'overview' ? (
                    <button
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </button>
                  ) : (
                    <Link to={item.path} className="nav-link">
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="main-header">
            <h2>Dashboard Overview</h2>
            <p>Welcome back! Here's what's happening with your students today.</p>
          </div>
          <div className="main-content">
            {renderMainContent()}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2025 Student Management System. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p>Version 1.0.0 | Built with React</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard