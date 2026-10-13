# IntelliMeet

## 📌 About the Project

IntelliMeet is a meeting management application designed to simplify
the process of organizing and managing meetings.

The application provides features for user authentication,
meeting management, and contact management.

## 🎯 Project Objectives

- Simplify meeting organization and management.
- Provide secure user authentication.
- Allow users to create and manage meetings.
- Manage meeting participants.
- Provide contact management functionality.
- Store and retrieve application data using a database.

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- JavaScript
- REST API

### Database
- MongoDB

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Postman

## ⚙️ Backend Features

### 1. User Authentication
Handles user authentication and protects routes
using authentication middleware.

### 2. Meeting Management
Provides API routes for meeting-related operations,
including joining and leaving meetings.

### 3. Contact Management
Provides API routes for managing contacts.

### 4. Database Integration
Stores and manages application data through
database models and database configuration.

## 📂 Project Structure

```text
IntelliMeet/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── middleware/
│   │   │   └── authmiddleware.js
│   │   ├── models/
│   │   │   ├── contact.js
│   │   │   ├── Meeting.js
│   │   │   └── user.js
│   │   ├── routes/
│   │   │   ├── authroutes.js
│   │   │   ├── contactsRoutes.js
│   │   │   └── meetingRoutes.js
│   │   └── server.js
│   └── package.json
├── frontend/
├── frontend_old/
└── README.md

🚀 Getting Started

Prerequisites

Install the following before running the backend:

Node.js

npm

The database used by the project


Installation

1. Clone the repository:

git clone https://github.com/Paramesh45-prog/IntelliMeet.git


2. Navigate to the backend folder:

cd IntelliMeet/backend


3. Install dependencies:

npm install


4. Configure the environment variables in a .env file.


5. Start the backend using the appropriate command defined in package.json.



🔐 Environment Variables

Configure the environment variables required by your application.

Do not upload your .env file or expose database credentials, passwords, or secret keys on GitHub.

👨‍💻 My Contribution

My contribution to IntelliMeet focuses on backend development and database integration, including:

Developing backend API routes.

Implementing authentication middleware.

Managing user, meeting, and contact models.

Connecting the application to its database.

Supporting meeting and contact management operations.


📌 Future Enhancements

Improve API security and validation.

Add comprehensive API documentation.

Implement automated backend testing.

Improve database performance and error handling.


📄 License

This project is developed for educational purposes.

**Important:** This draft assumes MongoDB and certain technologies based on your earlier project structure. Confirm the database and check your `package.json` before publishing those details. Also, describe only the features that your project actually implements.

---

## Step 2: Add the content on GitHub using your mobile

Since you are already viewing your repository on your phone, you can edit the README directly.

1. Open your repository: 0
2. Scroll to the `README.md` section.
3. Tap the **pencil icon** near the README heading.
4. GitHub will open the editor.
5. Replace the existing content with the README text above.
6. Scroll down to the **Commit changes** section.
7. Enter a commit message:

   `Update IntelliMeet project README`

8. Select the option to commit directly to the `main` branch, if shown.
9. Tap **Commit changes**.

Your README will be updated on GitHub.

### One important question

Before you publish the README, **are you using MongoDB as the database for IntelliMeet?**

Your earlier project structure includes `db.js`, but that alone doesn't confirm which database you use. Tell me whether it's MongoDB or another database so we can make the README accurate.
