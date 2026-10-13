import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("Dashboard");
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const [newMeeting, setNewMeeting] = useState({
    title: "",
    date: "",
    time: "",
    participants: "",
  });

  const [meetings, setMeetings] = useState([
    {
      title: "Product Discussion",
      date: "Oct 1, 2026",
      time: "10:30 AM",
      participants: 8,
      status: "Completed",
    },
    {
      title: "Client Meeting",
      date: "Oct 1, 2026",
      time: "2:00 PM",
      participants: 5,
      status: "Completed",
    },
    {
      title: "Project Review",
      date: "Oct 1, 2026",
      time: "4:00 PM",
      participants: 6,
      status: "Upcoming",
    },
    {
      title: "Design Discussion",
      date: "Oct 2, 2026",
      time: "10:30 AM",
      participants: 4,
      status: "Upcoming",
    },
  ]);

  const contacts = [
    {
      name: "Arun Kumar",
      email: "arun@example.com",
      role: "Product Manager",
    },
    {
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "UI/UX Designer",
    },
    {
      name: "Rahul Singh",
      email: "rahul@example.com",
      role: "Developer",
    },
    {
      name: "Meena Raj",
      email: "meena@example.com",
      role: "Project Manager",
    },
  ];

  const navigate = (name) => {
    setPage(name);
    setNotifications(false);
    setShowMeetingForm(false);
  };

  const openMeetingForm = () => {
    setPage("Meetings");
    setShowMeetingForm(true);
    setNotifications(false);
  };

  const handleMeetingChange = (field, value) => {
    setNewMeeting((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const saveMeeting = () => {
    if (
      !newMeeting.title.trim() ||
      !newMeeting.date ||
      !newMeeting.time ||
      !newMeeting.participants
    ) {
      alert("Please fill in all meeting details.");
      return;
    }

    const dateObject = new Date(`${newMeeting.date}T${newMeeting.time}`);

    const formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const formattedTime = dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    const meeting = {
      title: newMeeting.title,
      date: formattedDate,
      time: formattedTime,
      participants: Number(newMeeting.participants),
      status: "Upcoming",
    };

    setMeetings((previous) => [meeting, ...previous]);

    setNewMeeting({
      title: "",
      date: "",
      time: "",
      participants: "",
    });

    setShowMeetingForm(false);

    alert("Meeting scheduled successfully!");
  };

  const menu = [
    ["Dashboard", "⌂"],
    ["Meetings", "▣"],
    ["Calendar", "□"],
    ["Contacts", "♙"],
    ["Analytics", "◫"],
    ["Settings", "⚙"],
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

          {menu.map(([name, icon]) => (
            <button
              key={name}
              className={`nav-item ${
                page === name ? "active" : ""
              }`}
              onClick={() => navigate(name)}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}

        </nav>

        <div className="sidebar-bottom">

          <button
            className={`nav-item ${
              page === "Profile" ? "active" : ""
            }`}
            onClick={() => navigate("Profile")}
          >
            <span>●</span>
            Profile
          </button>

          <button
            className="user-card"
            onClick={() => navigate("Profile")}
          >
            <div className="avatar">U</div>

            <div>
              <strong>User</strong>
              <small>user@example.com</small>
            </div>
          </button>

        </div>

      </aside>


      {/* MAIN */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div>
            <h1>{page}</h1>

            <p>
              {page === "Dashboard" &&
                "Welcome back! Here's what's happening today."}

              {page === "Meetings" &&
                "Create and manage your meetings."}

              {page === "Calendar" &&
                "View your meeting schedule."}

              {page === "Contacts" &&
                "Manage your team contacts."}

              {page === "Analytics" &&
                "View your meeting insights."}

              {page === "Settings" &&
                "Manage your IntelMeet preferences."}

              {page === "Profile" &&
                "Manage your account information."}
            </p>
          </div>


          <div className="topbar-actions">

            <button
              className="notification-button"
              onClick={() =>
                setNotifications(!notifications)
              }
            >
              🔔
              <span className="notification-dot"></span>
            </button>


            {notifications && (
              <div className="notification-panel">

                <strong>Notifications</strong>

                <p>
                  Project Review starts at 4:00 PM.
                </p>

                <p>
                  You have a new meeting update.
                </p>

                <p>
                  Design Discussion is tomorrow.
                </p>

              </div>
            )}


            <button
              className="profile-button"
              onClick={() => navigate("Profile")}
            >
              <div className="avatar small">U</div>

              <span>User</span>

              <span>⌄</span>
            </button>

          </div>

        </header>


        {/* =====================================================
            DASHBOARD
        ===================================================== */}

        {page === "Dashboard" && (

          <div className="dashboard">

            <section className="welcome-card">

              <div>

                <span className="welcome-label">
                  GOOD AFTERNOON
                </span>

                <h2>
                  Ready for your next meeting?
                </h2>

                <p>
                  Create, manage and collaborate with your team
                  from one simple workspace.
                </p>

                <button
                  className="primary-button"
                  onClick={openMeetingForm}
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

                <div className="stat-icon purple">
                  ▣
                </div>

                <div>
                  <span>Total Meetings</span>
                  <strong>{meetings.length + 20}</strong>
                  <small>+12% this month</small>
                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon blue">
                  ◷
                </div>

                <div>
                  <span>Meeting Hours</span>
                  <strong>38.5</strong>
                  <small>+8% this month</small>
                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon green">
                  ✓
                </div>

                <div>
                  <span>Completed</span>
                  <strong>
                    {
                      meetings.filter(
                        (meeting) =>
                          meeting.status === "Completed"
                      ).length + 16
                    }
                  </strong>
                  <small>75% completion</small>
                </div>

              </div>


              <div className="stat-card">

                <div className="stat-icon orange">
                  ♙
                </div>

                <div>
                  <span>Participants</span>
                  <strong>
                    {meetings.reduce(
                      (total, meeting) =>
                        total + Number(meeting.participants),
                      76
                    )}
                  </strong>
                  <small>All meetings</small>
                </div>

              </div>

            </section>


            {/* RECENT MEETINGS */}

            <section className="dashboard-section">

              <div className="section-header">

                <div>
                  <h2>Recent Meetings</h2>
                  <p>Your latest meeting activity</p>
                </div>

                <button
                  className="text-button"
                  onClick={() => navigate("Meetings")}
                >
                  View all →
                </button>

              </div>


              <div className="meeting-list">

                {meetings.slice(0, 4).map(
                  (meeting, index) => (

                    <div
                      className="meeting-card"
                      key={index}
                    >

                      <div className="meeting-icon">
                        🎥
                      </div>


                      <div className="meeting-info">

                        <h3>
                          {meeting.title}
                        </h3>

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

                  )
                )}

              </div>

            </section>


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
                  onClick={openMeetingForm}
                >

                  <span className="quick-icon purple-bg">
                    ＋
                  </span>

                  <div>
                    <strong>
                      Schedule Meeting
                    </strong>

                    <small>
                      Create a new meeting
                    </small>
                  </div>

                </button>


                <button
                  className="quick-card"
                  onClick={() => navigate("Contacts")}
                >

                  <span className="quick-icon blue-bg">
                    ♙
                  </span>

                  <div>
                    <strong>
                      Add Contact
                    </strong>

                    <small>
                      Add a team member
                    </small>
                  </div>

                </button>


                <button
                  className="quick-card"
                  onClick={() => navigate("Analytics")}
                >

                  <span className="quick-icon green-bg">
                    ▥
                  </span>

                  <div>
                    <strong>
                      View Analytics
                    </strong>

                    <small>
                      Check meeting insights
                    </small>
                  </div>

                </button>

              </div>

            </section>

          </div>

        )}


        {/* =====================================================
            MEETINGS
        ===================================================== */}

        {page === "Meetings" && (

          <div className="dashboard">

            <section className="welcome-card">

              <div>

                <span className="welcome-label">
                  MEETING CENTER
                </span>

                <h2>
                  Manage your meetings
                </h2>

                <p>
                  Schedule, review and manage your meetings.
                </p>


                <button
                  className="primary-button"
                  onClick={() =>
                    setShowMeetingForm(true)
                  }
                >
                  + Schedule New Meeting
                </button>

              </div>


              <div className="welcome-graphic">

                <div className="graphic-circle">
                  📅
                </div>

              </div>

            </section>


            {/* MEETING FORM */}

            {showMeetingForm && (

              <section className="dashboard-section">

                <div className="section-header">

                  <div>
                    <h2>
                      Schedule New Meeting
                    </h2>

                    <p>
                      Create a new meeting
                    </p>
                  </div>


                  <button
                    className="view-button"
                    onClick={() =>
                      setShowMeetingForm(false)
                    }
                  >
                    Cancel
                  </button>

                </div>


                <div className="meeting-form">

                  <label>
                    Meeting Title

                    <input
                      type="text"
                      placeholder="Enter meeting title"
                      value={newMeeting.title}
                      onChange={(event) =>
                        handleMeetingChange(
                          "title",
                          event.target.value
                        )
                      }
                    />

                  </label>


                  <label>
                    Date

                    <input
                      type="date"
                      value={newMeeting.date}
                      onChange={(event) =>
                        handleMeetingChange(
                          "date",
                          event.target.value
                        )
                      }
                    />

                  </label>


                  <label>
                    Time

                    <input
                      type="time"
                      value={newMeeting.time}
                      onChange={(event) =>
                        handleMeetingChange(
                          "time",
                          event.target.value
                        )
                      }
                    />

                  </label>


                  <label>
                    Participants

                    <input
                      type="number"
                      min="1"
                      placeholder="Number of participants"
                      value={newMeeting.participants}
                      onChange={(event) =>
                        handleMeetingChange(
                          "participants",
                          event.target.value
                        )
                      }
                    />

                  </label>


                  <div className="form-actions">

                    <button
                      className="primary-button"
                      onClick={saveMeeting}
                    >
                      Save Meeting
                    </button>


                    <button
                      className="view-button"
                      onClick={() =>
                        setShowMeetingForm(false)
                      }
                    >
                      Cancel
                    </button>

                  </div>

                </div>

              </section>

            )}


            {/* ALL MEETINGS */}

            <section className="dashboard-section">

              <div className="section-header">

                <div>
                  <h2>
                    All Meetings
                  </h2>

                  <p>
                    Your meeting history and upcoming sessions
                  </p>
                </div>

              </div>


              <div className="meeting-list">

                {meetings.map(
                  (meeting, index) => (

                    <div
                      className="meeting-card"
                      key={index}
                    >

                      <div className="meeting-icon">
                        📅
                      </div>


                      <div className="meeting-info">

                        <h3>
                          {meeting.title}
                        </h3>

                        <p>
                          {meeting.date} • {meeting.time}
                        </p>

                        <small>
                          {meeting.participants} participants
                        </small>

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

                  )
                )}

              </div>

            </section>

          </div>

        )}



              {/* CALENDAR */}
        {page === "Calendar" && (
          <div className="dashboard">

            <section className="dashboard-section">

              <div className="section-header">

                <div>
                  <h2>October 2026</h2>
                  <p>Your meeting calendar</p>
                </div>

                <button
                  className="primary-button"
                  onClick={() => navigate("Meetings")}
                >
                  + New Meeting
                </button>

              </div>

              <div className="calendar-grid">

                <div className="calendar-day-name">SUN</div>
                <div className="calendar-day-name">MON</div>
                <div className="calendar-day-name">TUE</div>
                <div className="calendar-day-name">WED</div>
                <div className="calendar-day-name">THU</div>
                <div className="calendar-day-name">FRI</div>
                <div className="calendar-day-name">SAT</div>

                <div className="calendar-cell empty"></div>
                <div className="calendar-cell empty"></div>
                <div className="calendar-cell empty"></div>
                <div className="calendar-cell empty"></div>

                <div className="calendar-cell">
                  <strong>1</strong>
                  <small>Product Discussion</small>
                  <small>Client Meeting</small>
                  <small>Project Review</small>
                </div>

                <div className="calendar-cell">
                  <strong>2</strong>
                  <small>Design Discussion</small>
                </div>

                {Array.from({ length: 29 }, (_, index) => {
                  const day = index + 3;

                  return (
                    <div
                      className="calendar-cell"
                      key={day}
                    >
                      <strong>{day}</strong>
                    </div>
                  );
                })}

              </div>

            </section>

          </div>
        )}

        {/* ANALYTICS */}
        {page === "Analytics" && (
          <div className="dashboard">

            <section className="welcome-card">

              <div>
                <span className="welcome-label">
                  MEETING INSIGHTS
                </span>

                <h2>Meeting Analytics</h2>

                <p>
                  Understand your meeting activity and productivity.
                </p>
              </div>

              <div className="welcome-graphic">
                <div className="graphic-circle">
                  📊
                </div>
              </div>

            </section>

            <section className="stats-grid">

              <div className="stat-card">
                <div className="stat-icon purple">
                  ▣
                </div>

                <div>
                  <span>Total Meetings</span>
                  <strong>24</strong>
                  <small>This month</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon blue">
                  ◷
                </div>

                <div>
                  <span>Meeting Hours</span>
                  <strong>38.5</strong>
                  <small>This month</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">
                  ✓
                </div>

                <div>
                  <span>Completion</span>
                  <strong>75%</strong>
                  <small>18 completed</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">
                  ♙
                </div>

                <div>
                  <span>Participants</span>
                  <strong>96</strong>
                  <small>Total</small>
                </div>
              </div>

            </section>

            <section className="dashboard-section">

              <div className="section-header">
                <div>
                  <h2>Meeting Activity</h2>
                  <p>Weekly meeting activity</p>
                </div>
              </div>

              <div className="chart">

                {[40, 65, 50, 80, 55, 90, 70].map(
                  (height, index) => (
                    <div
                      className="chart-bar"
                      key={index}
                      style={{
                        height: `${height}%`,
                      }}
                    ></div>
                  )
                )}

              </div>

            </section>

          </div>
        )}

        {/* SETTINGS */}
        {page === "Settings" && (
          <div className="dashboard">

            <section className="dashboard-section">

              <div className="section-header">

                <div>
                  <h2>Settings</h2>

                  <p>
                    Customize your IntelMeet experience.
                  </p>
                </div>

              </div>

              <div className="meeting-list">

                {[
                  [
                    "👤",
                    "Account",
                    "Manage your account information.",
                  ],
                  [
                    "🔔",
                    "Notifications",
                    "Manage meeting notifications.",
                  ],
                  [
                    "🎨",
                    "Appearance",
                    "Dark navy appearance is enabled.",
                  ],
                  [
                    "🎥",
                    "Meeting Preferences",
                    "Manage meeting options.",
                  ],
                ].map((item, index) => (

                  <div
                    className="meeting-card"
                    key={index}
                  >

                    <div className="meeting-icon">
                      {item[0]}
                    </div>

                    <div className="meeting-info">

                      <h3>{item[1]}</h3>

                      <p>{item[2]}</p>

                    </div>

                    <button className="view-button">
                      Manage
                    </button>

                  </div>

                ))}

              </div>

            </section>

          </div>
        )}

        {/* PROFILE */}
        {page === "Profile" && (
          <div className="dashboard">

            <section className="welcome-card">

              <div>

                <span className="welcome-label">
                  MY ACCOUNT
                </span>

                <h2>User Profile</h2>

                <p>
                  Manage your IntelMeet account information.
                </p>

                <button className="primary-button">
                  Edit Profile
                </button>

              </div>

              <div className="welcome-graphic">

                <div className="graphic-circle">
                  U
                </div>

              </div>

            </section>

            <section className="dashboard-section">

              <div className="section-header">

                <div>
                  <h2>Account Information</h2>
                  <p>Your profile details</p>
                </div>

              </div>

              <div className="meeting-list">

                <div className="meeting-card">

                  <div className="avatar">
                    U
                  </div>

                  <div className="meeting-info">

                    <h3>User</h3>

                    <p>
                      user@example.com
                    </p>

                    <small>
                      IntelMeet User
                    </small>

                  </div>

                  <button className="view-button">
                    Edit
                  </button>

                </div>

              </div>

            </section>

          </div>
        )}

      </main>

    </div>
  );
}

export default App;