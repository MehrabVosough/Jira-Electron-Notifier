# Jira Notifier Electron App

[![Electron](https://img.shields.io/badge/Electron-v26.2.1-blue?logo=electron)](https://www.electronjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18.2.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.2.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A cross-platform desktop application built with **Electron**, **React**, and **TypeScript** to monitor your Jira tasks and receive real-time notifications. This tool is designed to keep you updated on task assignments, comments, and status changes directly on your desktop and via Telegram.

---

## ✨ Features

- **Real-Time Notifications:** Stay informed with instant notifications for task updates, assignments, and new comments.
- **Personalized Experience:** Notifications are tailored to each user.
- **Task List View:** See an up-to-date list of your Jira tasks directly within the application.
- **Telegram Integration:** Receive notifications on your Telegram account for important updates.
- **Standalone Windows App:** The app runs as a standalone executable on Windows, so no need to install Node.js to use it.
- **Backend Integration:** Integrates with an existing Express.js server to fetch real-time task changes.

---

## 💻 Technologies Used

- **Electron:** For building the cross-platform desktop application.
- **React:** For the user interface.
- **TypeScript:** For a robust and scalable codebase.
- **Webpack:** To bundle the application assets.

---

## 🚀 Getting Started

### Prerequisites

To get the development environment up and running, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (version 9 or higher)
- **Windows OS** (required for building and running the installer)

### Project Structure
jira-notifier-electron/
├── dist/                 # Compiled output
│   ├── main.js           # Electron main process
│   ├── preload.js        # Preload script
│   ├── renderer.js       # React renderer bundle
│   └── index.html        # Main HTML file
├── src/
│   ├── main.ts           # Electron main process source
│   ├── preload.ts        # Preload script source
│   └── renderer/         # React source
│       ├── App.tsx
│       └── components/
│           └── TaskList.tsx
├── package.json
├── tsconfig.json
└── webpack.config.js

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/MehrabVosough/Jira-Electron-Notifier.git](https://github.com/MehrabVosough/Jira-Electron-Notifier.git)
    cd Jira-Electron-Notifier
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development app:
    ```bash
    npm run dev
    ```
    This command opens the app with live-reload enabled, using a local webpack development server.

---

## 📦 Building and Deployment

### Building for Windows

1.  Build the project:
    ```bash
    npm run build
    ```
2.  Create the installer:
    ```bash
    npm run dist
    ```
    The installer `.exe` file will be generated in the `dist/` directory.

---

## ⚙️ Usage

After installing the application, launch it from your Desktop or Start Menu.

- Ensure your Express.js backend server is running to receive real-time notifications.
- The app will display your task list and send you notifications for any updates.

### Telegram Integration

To enable Telegram notifications, you need to map each Jira user to their Telegram chat ID within your Express server's configuration. The app will then send notifications for:

- Task assignment
- Task updates
- Comments where the user is mentioned

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new feature branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3.  Commit your changes:
    ```bash
    git commit -m 'feat: Add a new feature'
    ```
4.  Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5.  Open a Pull Request.

---

## License
