import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [showNotifications, setShowNotifications] = useState(false);

  const meetings = [
    {
      title: "Product Discussion",
      date: "Yesterday",
      time: "10:30 AM",
      status: "Completed",
    },
    {
      title: "Client Meeting",
      date: "Yesterday",
      time: "2:00 PM",
      status: "Completed",
    },
    {
      title: "Team Standup",
      date: "Today",
      time: "9:30 AM",
      status: "Completed",
    },
    {
      title: "Project Planning",
      date: "Tomorrow",
      time: "11:00 AM",
      status: "Upcoming",
    },
  ];

  const upcomingMeetings = [
    {
      title: "Project Review",
      time: "Today • 4:00 PM",
      people: "6 participants",
    },
    {
      title: "Design Discussion",
      time: "Tomorrow • 10:30 AM",
      people: "4 participants",
    },
  ];

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo-section">
          <div className="logo-icon">I</div>
          <div>
            <h2>IntelMeet</h2>
            <span>Smart Meetings</span>
          </div>
        </div>

        <nav className="navigation">

          <button
            className={activePage === "Dashboard" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("Dashboard")}
          >
            <span>⌂</span>
            Dashboard
          </button>

          <button
            className={activePage === "Meetings" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("Meetings")}
          >
            <span>▣</span>
            Meetings
          </button>

          <button
            className={activePage === "Calendar" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("Calendar")}
          >
            <span>□</span>
            Calendar
          </button>

          <button
            className={activePage === "Contacts" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("Contacts")}
          >
            <span>♙</span>
            Contacts
          </button>

          <button
            className={activePage === "Analytics" ? "nav-item active" : "nav-item"}
            onClick={() => setActivePage("Analytics")}
          >
            <span>◫</span>
            Analytics
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="nav-item"
            onClick={() => setActivePage("Settings")}
          >
            <span>⚙</span>
            Settings
          </button>

          <div className="user-card">
            <div className="avatar">U</div>
            <div>
              <strong>User</strong>
              <small>user@example.com</small>
            </div>
          </div>

        </div>

      </aside>


      {/* MAIN AREA */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div>
            <h1>{activePage}</h1>
            <p>
              {activePage === "Dashboard"
                ? "Welcome back! Here's what's happening today."
                : `Manage your ${activePage.toLowerCase()}.`}
            </p>
          </div>

          <div className="topbar-actions">

            <button
              className="notification-button"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
            >
              🔔
              <span className="notification-dot"></span>
            </button>

            {showNotifications && (
              <div className="notification-panel">
                <strong>Notifications</strong>
                <p>You have 3 new meeting updates.</p>
                <p>Your project review starts at 4:00 PM.</p>
              </div>
            )}

            <button
              className="profile-button"
              onClick={() => setActivePage("Profile")}
            >
              <div className="avatar small">U</div>
              <span>User</span>
              <span>⌄</span>
            </button>

          </div>

        </header>


        {/* DASHBOARD */}
        {activePage === "Dashboard" && (
          <div className="dashboard">

            {/* WELCOME */}
            <section className="welcome-card">

              <div>
                <span className="welcome-label">
                  GOOD AFTERNOON
                </span>

                <h2>Ready for your next meeting?</h2>

                <p>
                  Create, manage and collaborate with your team
                  from one simple workspace.
                </p>

                <button
                  className="primary-button"
                  onClick={() => setActivePage("Meetings")}
                >
                  + Schedule Meeting
                </button>
              </div>

              <div className="welcome-graphic">
                <div className="graphic-circle">
                  🎥
                </div>
              </div>

            </section>


            {/* STATISTICS */}
            <section className="stats-grid">

              <div className="stat-card">
                <div className="stat-icon purple">▣</div>
                <div>
                  <span>Total Meetings</span>
                  <strong>24</strong>
                  <small>+12% this month</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon blue">◷</div>
                <div>
                  <span>Hours in Meetings</span>
                  <strong>38.5</strong>
                  <small>+8% this month</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">✓</div>
                <div>
                  <span>Completed</span>
                  <strong>18</strong>
                  <small>75% completion rate</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">♙</div>
                <div>
                  <span>Participants</span>
                  <strong>96</strong>
                  <small>Across all meetings</small>
                </div>
              </div>

            </section>


            {/* CONTENT GRID */}
            <div className="content-grid">

              {/* RECENT MEETINGS */}
              <section className="dashboard-section">

                <div className="section-header">
                  <div>
                    <h2>Recent Meetings</h2>
                    <p>Your latest meeting activity</p>
                  </div>

                  <button
                    className="text-button"
                    onClick={() => setActivePage("Meetings")}
                  >
                    View all →
                  </button>
                </div>

                <div className="meeting-list">

                  {meetings.map((meeting, index) => (
                    <div className="meeting-card" key={index}>

                      <div className="meeting-icon">
                        🎥
                      </div>

                      <div className="meeting-info">
                        <h3>{meeting.title}</h3>

                        <p>
                          {meeting.date} • {meeting.time}
                        </p>
                      </div>

                      <span
                        className={
                          meeting.status === "Upcoming"
                            ? "status upcoming"
                            : "status completed"
                        }
                      >
                        {meeting.status}
                      </span>

                      <button className="view-button">
                        View
                      </button>

                    </div>
                  ))}

                </div>

              </section>


              {/* UPCOMING */}
              <section className="dashboard-section upcoming-section">

                <div className="section-header">
                  <div>
                    <h2>Upcoming</h2>
                    <p>What's next</p>
                  </div>

                  <button className="calendar-button">
                    View calendar
                  </button>
                </div>

                <div className="upcoming-list">

                  {upcomingMeetings.map((meeting, index) => (
                    <div className="upcoming-card" key={index}>

                      <div className="date-box">
                        <strong>{index === 0 ? "01" : "02"}</strong>
                        <span>OCT</span>
                      </div>

                      <div>
                        <h3>{meeting.title}</h3>
                        <p>{meeting.time}</p>
                        <small>{meeting.people}</small>
                      </div>

                    </div>
                  ))}

                </div>

                <button
                  className="schedule-button"
                  onClick={() => setActivePage("Meetings")}
                >
                  + Schedule a meeting
                </button>

              </section>

            </div>


            {/* QUICK ACTIONS */}
            <section className="quick-section">

              <div className="section-header">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Get things done faster</p>
                </div>
              </div>

              <div className="quick-grid">

                <button
                  className="quick-card"
                  onClick={() => setActivePage("Meetings")}
                >
                  <span className="quick-icon purple-bg">＋</span>
                  <div>
                    <strong>Schedule Meeting</strong>
                    <small>Create a new meeting</small>
                  </div>
                </button>

                <button
                  className="quick-card"
                  onClick={() => setActivePage("Contacts")}
                >
                  <span className="quick-icon blue-bg">♙</span>
                  <div>
                    <strong>Add Contact</strong>
                    <small>Add a team member</small>
                  </div>
                </button>

                <button
                  className="quick-card"
                  onClick={() => setActivePage("Analytics")}
                >
                  <span className="quick-icon green-bg">▥</span>
                  <div>
                    <strong>View Analytics</strong>
                    <small>Check meeting insights</small>
                  </div>
                </button>

              </div>

            </section>

          </div>
        )}


        {/* OTHER PAGES */}
        {activePage !== "Dashboard" && (
          <div className="page-placeholder">

            <div className="placeholder-icon">
              {activePage === "Meetings" && "▣"}
              {activePage === "Calendar" && "□"}
              {activePage === "Contacts" && "♙"}
              {activePage === "Analytics" && "◫"}
              {activePage === "Settings" && "⚙"}
              {activePage === "Profile" && "U"}
            </div>

            <h2>{activePage}</h2>

            <p>
              This section of IntelMeet is ready to be built.
            </p>

            <button
              className="primary-button"
              onClick={() => setActivePage("Dashboard")}
            >
              ← Back to Dashboard
            </button>

          </div>
        )}

      </main>

    </div>
  );
}

export default App;