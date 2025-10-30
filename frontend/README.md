# Climapulse — Frontend (assignment)

This folder contains a React + Vite frontend for the Climapulse developer assignment.

Prerequisites
- Node.js (v16+ recommended)
- npm (or yarn)

Quick start (from the `frontend` folder)

1) Install dependencies

```powershell
npm install
```

2) Start the mock API (runs on port 3000)

```powershell
npm run api
```

3) In a separate terminal, start the frontend dev server (Vite, default port 5173)

```powershell
npm run dev
```

Open the app at:

http://localhost:5173/

## Implemented Functionality

### Core Features
- Fetch and display all users from the API (`GET /users`)
- Navigate to a user detail page when clicking a user
- Display full user details
- Delete a user (`DELETE /users/:id`)
- Responsive layout and clean UI structure

### Bonus Features
- Search/filter users by name or email
- Add new user functionality (`POST /users`)
- Edit user details (`PUT /users/:id`)
- Basic pagination
- Loading and error states
- Reusable components and modular file structure

### Technical Details
- Axios for API communication
- React Router for navigation
- Component-based architecture with hooks
