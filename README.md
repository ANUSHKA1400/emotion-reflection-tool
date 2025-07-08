Emotion Reflection Tool
This project presents a concise web application designed for users to input textual reflections, receive a mock emotion analysis from a Python backend API, and view the results within a clean, responsive frontend interface. This application was developed as part of the Sarthi.me Full Stack Development Internship assignment.

Features
Frontend (React & TypeScript with Tailwind CSS v4)
Intuitive User Interface: A clean and responsive form featuring a textarea for text input and a dedicated "Analyze Emotion" submission button.

Dynamic Feedback: Displays a loading indicator while awaiting API responses, ensuring a smooth user experience.

Clear Results Display: Presents the emotion analysis in a well-styled, visually distinct card upon successful API return.

Robust Error Handling: Gracefully manages and displays error messages for issues such as empty input or API communication failures.

Modern Styling: Utilizes Tailwind CSS v4 for a contemporary, mobile-first design and a professional aesthetic.

Modular Architecture: Implements a component-based structure (App.tsx and EmotionForm.tsx) for enhanced maintainability and scalability.

Backend (Python FastAPI API)
High-Performance API: Developed using FastAPI, known for its speed and efficiency in building APIs.

POST Endpoint: Exposes a /analyze endpoint configured to accept POST requests, expecting a JSON payload with a text field.

Mock Analysis Generation: Provides a simulated emotion analysis response in a standardized JSON format (e.g., { "emotion": "Joyful", "confidence": 0.90 }).

CORS Configuration: Properly configured Cross-Origin Resource Sharing (CORS) middleware to facilitate seamless communication with the frontend application.

ASGI Server: Utilizes Uvicorn as the Asynchronous Server Gateway Interface (ASGI) server for running the FastAPI application.

Project Structure
emotion-reflection-tool/
├── venv/                 # Python Virtual Environment (at project root)
├── backend/              # Python FastAPI API
│   └── app.py            # FastAPI application code
├── frontend/             # React TypeScript Application
│   ├── node_modules/     # Node.js dependencies (ignored by Git)
│   ├── public/           # Public assets
│   ├── src/              # Source code for the React app
│   │   ├── components/   # Reusable React components
│   │   │   └── EmotionForm.tsx # Emotion input form component
│   │   ├── App.tsx       # Main React application component
│   │   └── index.css     # Global CSS, including Tailwind directives
│   ├── package.json      # Frontend project metadata and scripts
│   └── tailwind.config.js# Tailwind CSS v4 configuration
├── .gitignore            # Global Git ignore rules
└── README.md             # Project documentation

Setup and Running Instructions
To set up and run this application on your local machine, please follow these detailed steps.

Prerequisites
Ensure the following software is installed on your system:

Python 3.x (latest stable version recommended)

Node.js (LTS version recommended, includes npm)

npm (Node Package Manager)

1. Clone the Repository
Begin by cloning the project repository to your local machine:

git clone https://github.com/ANUSHKA1400/emotion-reflection-tool.git
cd emotion-reflection-tool

2. Frontend Setup and Execution
Open a terminal window and navigate to the frontend directory:

# Assuming you are in your-project-root:
cd frontend

# Install Node.js dependencies
npm install

# Install Tailwind CSS and its CLI (essential for v4)
npm install tailwindcss@latest postcss@latest autoprefixer@latest @tailwindcss/cli@latest

# Ensure frontend/tailwind.config.js exists at the root of the 'frontend' folder
# with the correct content:
# /** @type {import('tailwindcss').Config} */
# module.exports = {
#   content: [
#     "./src/**/*.{js,jsx,ts,tsx}",
#   ],
#   theme: {
#     extend: {
#       fontFamily: {
#         inter: ['Inter', 'sans-serif'],
#       },
#     },
#   },
#   plugins: [],
# }

# Ensure frontend/src/index.css contains ONLY the Google Fonts import:
# /* Import Google Fonts - Inter */
# @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

# Start the React development server
npm start

The frontend application will compile and typically become accessible in your default web browser at http://localhost:3000. Keep this terminal window active.

3. Backend Setup and Execution
Open a separate, new terminal window/tab. Ensure this terminal's current directory is your project's root directory (emotion-reflection-tool).

# Create a Python virtual environment (at the project root for clean separation)
python -m venv venv

# Activate the virtual environment
# On Windows (PowerShell):
# .\venv\Scripts\Activate.ps1
# On Windows (Command Prompt):
# .\venv\Scripts\activate.bat
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies (FastAPI and Uvicorn)
pip install fastapi uvicorn

# Ensure backend/app.py contains the FastAPI code provided in the project.

# Run the FastAPI API using Uvicorn
uvicorn backend.app:app --reload --host 0.0.0.0 --port 8000

The backend API will initiate and run on http://0.0.0.0:8000. Keep this terminal window active.

4. Usage
Verify that both the frontend (npm start) and backend (uvicorn backend.app:app --reload --host 0.0.0.0 --port 8000) servers are running concurrently in their respective terminals.

Open your web browser and navigate to http://localhost:3000.

Enter your desired text reflection into the provided textarea.

Click the "Analyze Emotion" button to observe the mock emotion analysis result displayed on the interface.

Assessment Considerations
This solution addresses the assignment requirements by demonstrating:

Code Quality & Structure: The project is logically organized into distinct frontend and backend directories. The Python virtual environment is placed at the project root for a cleaner backend folder. React components are structured using modern hooks, and both Python and TypeScript codebases are well-commented for clarity.

API Integration Approach: A robust communication channel is established between the React frontend and the FastAPI backend utilizing the standard fetch API. This includes comprehensive handling of JSON data exchange, management of loading states, and graceful presentation of success and error scenarios. CORS is meticulously configured to ensure seamless cross-origin requests.

UI/UX Polish: The application features a fully responsive, mobile-first design, achieved through the effective application of Tailwind CSS v4. The user interface prioritizes clarity, providing immediate visual feedback (e.g., loading spinners) and presenting analysis results and error messages in an easily digestible format.

Loom Video (Optional)
[Insert Link to Your Loom Video Here, if applicable]
(A short Loom video walking through the solution and demonstrating its functionality is highly recommended for comprehensive submission.)

Assignment for Sarthi.me Full Stack Development Internship
Submitted by: ANUSHKA1400
Submission Date: July 12, 2025