# CrowdConnect

CrowdConnect is a full-stack event management platform designed to streamline planning and coordination for organisers, speakers, and attendees. The platform features modern, role-based dashboards, robust backend APIs, real-time notifications, and secure authentication, all working together to make event management efficient and intuitive.

## Features

- **Role-Based Dashboards:** Custom interfaces for organisers, speakers, and attendees.
- **Event Creation & Management:** Organisers can create, edit, and monitor events through a dedicated dashboard.
- **Speaker & Team Management:** Easily add and manage speakers and team members for any event.
- **Registration & Participation:** Attendees can browse, register for events, and connect within the platform.
- **Secure Auth:** JWT-based authentication for all user types.
- **Responsive UI:** Clean, modern design for desktop and mobile.

## Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Deployment:** Vercel (frontend), Render (backend)
- **Other:** dotenv for configuration, JWT for authentication

## Getting Started

### 1. Clone the Repository
git clone https://github.com/Nandani2024-tech/CrowdConnect.git
cd CrowdConnect

### 2. Backend Setup

cd backend
npm install

Create a .env file with MONGODB_URI, JWT_SECRET, FRONTEND_URL, PORT
npm run dev

### 3. Frontend Setup
cd frontend/vite-project
npm install

Create a .env file with VITE_API_URL (e.g., http://localhost:5000/api for local)
npm run dev



### 4. Deployment
Frontend: Deploy the /frontend/vite-project directory to Vercel. In your Vercel dashboard, set the environment variable VITE_API_URL to your live backend URL (for example: https://crowdconnect-5n4r.onrender.com).

Backend: Deploy the /backend directory to Render. In the Render dashboard, add all required environment variables—including FRONTEND_URL set to your deployed frontend address, plus any others you use like MONGODB_URI, JWT_SECRET, and PORT.

## Folder Structure
CrowdConnect/
│
├── backend/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ └── server.js
├── frontend/
│ └── vite-project/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── api/
│ └── .env
├── README.md

