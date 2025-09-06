# Face-Recognition Web App
A full-stack web application that uses the Clarifai API to detect faces in images. The app highlights faces with a bounding box and keeps track of how many images each user has processed.

### 🚀 Features
-    🔒 User authentication (Register & Login)
-    🖼️ Face detection from image URLs
-    🟩 Bounding box drawn around detected face(s)
-    📊 Tracks number of images processed per user
-    💾 Stores user info (name, email, password) in PostgreSQL
-    ⚡ Built with modern frontend (React + Vite) and backend (Node.js + Express)

## 🛠️ Tech Stack
### Frontend
- React (Vite)
- Fetch API for backend communication

### Backend
-   Node.js
-   Express.js
-   bcrypt (for password hashing)
-   knex.js (SQL query builder)

### Database
-   PostgreSQL

### External API
-   **[Clarifai](https://www.clarifai.com/)** Face Detection Module

## ✨UI/Styling Libraries
-   tsparticles/react & @tsparticles/slim → used for background particle animations.
-   react-parallax-tilt → UI animation effect.
-   tachyons → CSS utility framework for styling.

## 🖥️ Usage
-    Register a new account or login.
-    Paste an image URL into the input field.
-    Click Detect → The app will highlight face in the image.
-    Your profile will update with the number of images processed.

## 📸 [Demo](https://y0ooo0gesh.github.io/Face-Recognition/)
![Demo App](/assets/demo/demo.png "App Demo")