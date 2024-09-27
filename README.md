# special-octo-garbanzo

This is a simple **To-Do List** application built using **React** for the frontend and **Flask** for the backend. The app allows users to create, update, and delete tasks, with a smooth UI/UX including animations when tasks are completed. Tasks can also be filtered by status (pending or completed).

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features

- Add new tasks.
- Mark tasks as complete or pending.
- Filter tasks by status (all, completed, pending).
- Animations for task completion.
- Fullstack app with Flask backend and React frontend.

## Technologies

- **Frontend**: React, CSS Grid
- **Backend**: Flask, SQLAlchemy
- **Database**: MySQL (or SQLite for local development)
- **Tools**: Axios or fetch for API calls, Flask-CORS for handling cross-origin requests.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Flyingmind/special-octo-garbanzo.git
cd special-octo-garbanzo
```

### 2. Backend Setup (Flask)

#### 1. Navigate to the backend/ directory:

```bash
cd backend
```

#### 2. Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

#### 3. Install the required dependencies:
```bash
pip install -r requirements.txt
```

#### 4. Set up your database configuration in config.py. You can use MySQL or SQLite for development.

#### 5. Start the Flask backend:
```bash
python app.py
```

The backend should now be running on http://localhost:5000.

### 3. Frontend Setup (React)

#### 1. Navigate to the frontend/ directory:

```bash
cd ../frontend
```

#### 2. Install the frontend dependencies:
```bash
npm install
```

#### 3. Start the React development server:
```bash
npm start
```

The frontend should now be running on http://localhost:3000.


## Usage
Once both the backend and frontend are running, you can access the application at http://localhost:3000.

- Add tasks: Type a new task in the input box and press "Add Task".
- Mark tasks as complete: Check the checkbox next to a task to mark it as complete. It will be crossed out with a smooth animation.
- Filter tasks: Use the "All", "Completed", or "Pending" buttons to filter tasks based on their status.

## API Endpoints
The backend API provides the following endpoints:

- `GET /tasks`: Get all tasks.
- `POST /tasks`: Add a new task.
- `PUT /tasks/:id`: Update a task (e.g., mark it as complete).
- `DELETE /tasks/:id`: Delete a task.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes.
- Open a pull request, and provide a clear description of the changes.
