# DevCI Solutions - Full Stack Web Application

## Project Description

DevCI Solutions is a full-stack web application designed for a software development company based in Côte d'Ivoire. It features a Python Flask backend serving a REST API, a PostgreSQL database for persistent storage, and a React frontend built with Vite and styled using Tailwind CSS. The application showcases the company's services, portfolio, and team members.

## Tech Stack

*   **Backend:** Python, Flask, Flask-SQLAlchemy, psycopg2-binary
*   **Database:** PostgreSQL
*   **Frontend:** JavaScript, React (with Vite), React Router
*   **Styling:** Tailwind CSS
*   **API Communication:** RESTful API, JSON

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Node.js and npm:** (LTS version recommended) - For running the React frontend. [Download Node.js](https://nodejs.org/)
*   **Python:** (Version 3.8+ recommended) - For running the Flask backend. [Download Python](https://www.python.org/downloads/)
*   **pip:** (Python package installer, usually comes with Python)
*   **PostgreSQL Server:** (Version 12+ recommended) - The database system. [Download PostgreSQL](https://www.postgresql.org/download/)
*   **Git:** For cloning the repository. [Download Git](https://git-scm.com/downloads)

## Getting Started / Installation

Follow these steps to set up and run the project locally:

**1. Clone the Repository:**

```bash
git clone <repository_url> # Replace <repository_url> with the actual URL
cd <repository_directory_name>
```

**2. Backend Setup:**

   a.  **Navigate to the backend directory:**
      ```bash
      cd backend
      ```

   b.  **Create and activate a Python virtual environment (recommended):**
      ```bash
      python -m venv venv
      # On Windows:
      # venv\Scripts\activate
      # On macOS/Linux:
      # source venv/bin/activate
      ```

   c.  **Install Python dependencies:**
      ```bash
      pip install -r requirements.txt
      ```

   d.  **Set up PostgreSQL:**
      *   Ensure your PostgreSQL server is installed and running.
      *   You need to create a database user and a database for the application. You can do this using `psql` or a GUI tool like pgAdmin or DBeaver.
      *   **Example using `psql`:**
          Connect to `psql` (you might need to connect as the default `postgres` superuser first, or another user with creation privileges):
          ```sql
          -- Create a new user (role) for your application
          CREATE USER youruser WITH PASSWORD 'yourpassword'; 
          -- Note: Replace 'youruser' and 'yourpassword' with your desired credentials.

          -- Create the database for the application, owned by your new user
          CREATE DATABASE company_db OWNER youruser;
          ```

   e.  **Set up Environment Variables for the Backend:**
      *   In the `backend` directory, create a file named `.env`.
      *   Add the following lines to it, replacing placeholders with your actual database credentials and desired settings:

          ```env
          # backend/.env
          FLASK_APP=app.py
          FLASK_DEBUG=1
          # Replace with your actual PostgreSQL connection string:
          DATABASE_URL=postgresql://youruser:yourpassword@localhost:5432/company_db 
          ```
          *   `FLASK_APP=app.py`: Tells Flask where your application instance is.
          *   `FLASK_DEBUG=1`: Enables debug mode for Flask (useful for development).
          *   `DATABASE_URL`: The connection string for your PostgreSQL database. Make sure `youruser`, `yourpassword`, `localhost` (if not local), `5432` (if not default port), and `company_db` match your setup.

   f.  **Create Database Tables:**
      The Flask application is configured to create database tables automatically if they don't exist when it starts (due to `db.create_all()` in `app.py`). This will happen when you first run the Flask server.

   g.  **Seed the Database with Mock Data:**
      (Ensure your virtual environment is activated and you are in the `backend` directory)
      ```bash
      python seed.py
      ```
      This will populate your database tables with initial mock data.

   h.  **Run the Flask Backend Server:**
      (Ensure your virtual environment is activated and you are in the `backend` directory)
      ```bash
      flask run
      ```
      The backend API should now be running, typically at `http://localhost:5000`.

**3. Frontend Setup:**

   a.  **Navigate to the frontend directory (from the project root):**
      ```bash
      cd ../frontend 
      # Or if you are in project root: cd frontend
      ```

   b.  **Install Node.js dependencies:**
      ```bash
      npm install
      ```

   c.  **Run the React Development Server:**
      ```bash
      npm run dev
      ```
      The React frontend development server should now be running, typically at `http://localhost:5173`. It's configured to proxy API requests to `http://localhost:5000` (your Flask backend).

**4. Accessing the Application:**

   *   Open your web browser and go to `http://localhost:5173` to see the React frontend.
   *   The frontend will make API calls to the backend running at `http://localhost:5000`.

---

*This README provides initial setup instructions. Further details on API endpoints, project structure, and contributions can be added as the project evolves.*
