# 💬 Discord-Inspired Communication Platform UI

A modern, responsive communication-platform UI inspired by applications like Discord, but designed with its own visual identity and user experience.

> **Note:** This project currently contains **frontend/UI/UX only**. Backend functionality will be implemented separately using Django and Python.

## ✨ Features

* 🎨 Modern dark-first UI
* 📱 Fully responsive design
* 🏠 Community/server dashboard
* 💬 Real-time-chat-style interface UI
* 👤 User profiles
* 💌 Direct messages UI
* 🔔 Notifications UI
* 🔍 Search interface
* ⚙️ User settings UI
* 🛠️ Community/server settings UI
* 🎭 Roles & permissions UI
* 📌 Pinned messages UI
* 😀 Reactions UI
* 📎 Attachment UI
* 🎙️ Voice-channel UI
* 🪟 Custom modals and dropdowns
* 📱 Mobile navigation
* ✨ Smooth UI animations and interactions

## 🛠️ Technologies

The current frontend is built using:

* HTML5
* CSS3
* Vanilla JavaScript
* Django Templates

### Backend — Future

The backend will be developed separately using:

* Python
* Django
* SQLite/MySQL

Backend functionality is **not included in the current UI project**.

## 📂 Project Structure

```text
project/
│
├── templates/
│   ├── base.html
│   │
│   ├── home.html
│   │
│   ├── auth/
│   │   ├── login.html
│   │   └── register.html
│   │
│   └── app/
│       ├── dashboard.html
│       ├── chat.html
│       ├── dms.html
│       ├── profile.html
│       ├── notifications.html
│       └── settings.html
│
├── static/
│   ├── css/
│   │   ├── style.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   └── js/
│       ├── main.js
│       ├── ui.js
│       ├── chat-ui.js
│       └── modals.js
│
└── README.md
```

## 🎯 Project Goal

The goal of this project is to create a clean and modern communication-platform interface that can later be connected to a Django backend.

The UI is intentionally designed to be different from Discord rather than being an exact clone.

The frontend focuses on:

* User experience
* Responsive layouts
* Reusable components
* Modern visual design
* Smooth interactions
* Easy backend integration later

## 🚧 Current Status

**Frontend/UI:** 🟢 In Development

**Backend:** 🔴 Not implemented

**Database:** 🔴 Not implemented

**Authentication:** 🔴 Not implemented

**Real-time messaging:** 🔴 Not implemented

**Voice communication:** 🔴 Not implemented

The current version uses static/mock content for demonstrating the interface.

## 🔮 Future Development

After completing the UI, backend functionality can be connected using Django.

Planned backend features include:

* User authentication
* User profiles
* Communities
* Channels
* Messaging
* Direct messages
* Notifications
* Roles and permissions
* Database integration
* Real-time communication
* Voice communication

## 📱 Responsive Design

The interface is designed to work across:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📲 Tablet

Mobile layouts use dedicated navigation and responsive components instead of simply shrinking the desktop interface.

## 🔒 Backend Separation

This project intentionally keeps frontend and backend responsibilities separate.

The UI does **not** contain:

* Django models
* Django views
* REST APIs
* Database queries
* Authentication logic
* WebSocket backend
* Django Channels implementation

These features can be integrated later without redesigning the frontend.

## 📄 License

This project is currently intended for learning and personal development.

The project is **not affiliated with or endorsed by Discord**.

---

Made with ❤️ using **HTML, CSS, JavaScript & Django Templates**.
