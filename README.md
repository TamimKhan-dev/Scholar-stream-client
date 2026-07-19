# 🎓 ScholarStream

A modern scholarship management platform that helps students discover, explore, and apply for scholarships from a centralized platform. ScholarStream simplifies the scholarship search process by providing detailed information about universities, eligibility requirements, application deadlines, tuition fees, and scholarship benefits while offering role-based management for students, moderators, and administrators.

## 🌐 Live Demo

- **Live URL:** https://assignment11-starter.web.app
- **Backend API URL:** https://scholar-stream-server-b7ha.onrender.com
- **Backend Repository URL:** [https://github.com/TamimKhan-dev/scholarstream-server](https://github.com/TamimKhan-dev/Scholar-stream-server.git)

---

## ✨ Features

- 🎓 Browse detailed scholarship information from multiple universities.
- 🔍 Search and filter scholarships by university, degree, category, and scholarship name.
- 👨‍🎓 Student dashboard to manage applications, payments, reviews, and profile.
- 🛡️ Role-based authentication for Students, Moderators, and Admins.
- 💳 Secure scholarship application payments using Stripe.
- ⭐ Students can submit ratings and reviews for scholarships.
- 💬 Moderators can provide feedback on scholarship applications.
- 📊 Admin dashboard for managing users, scholarships, and moderators.
- 📱 Fully responsive design for desktop, tablet, and mobile devices.
- 🎨 Modern UI built with Tailwind CSS and DaisyUI.

---

## 🛠️ Tech Stack

### Frontend

- React.js (Vite)
- React Router DOM
- Tailwind CSS
- DaisyUI
- Firebase Authentication

### Libraries & Packages

- Axios
- Framer Motion
- Recharts
- Date-fns
- Swiper
- Lucide React
- React Icons
- React Hot Toast
- React Tooltip
- React Spinners

---

## 📦 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/TamimKhan-dev/scholarstream-client.git
cd scholarstream-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env.local` file in the project root and add the following:

```env
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID

VITE_IMGBB_API_KEY=YOUR_IMGBB_API_KEY

VITE_API_URL=YOUR_BACKEND_API_URL
```

> Replace all placeholder values with your own credentials.

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📁 Project Structure

```text
src
├── assets
├── components
├── hooks
├── layouts
├── pages
├── providers
├── routes
├── shared
├── utils
└── main.jsx
```

---

## 👥 User Roles

### 👨‍🎓 Student

- Browse scholarships
- Apply for scholarships
- Complete payments
- Track application status
- Submit reviews and ratings

### 🛡️ Moderator

- Review scholarship applications
- Provide feedback
- Manage scholarship data

### 👑 Admin

- Manage users
- Manage moderators
- Manage scholarships
- Monitor overall platform activities
