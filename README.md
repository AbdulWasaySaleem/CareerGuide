# Career Guide

## Introduction
Welcome to the Career Guide! This platform is designed to help you explore and find the right career path based on your skills, interests, and preferences. By answering a series of questions in our quiz, you'll receive personalized career suggestions to guide your next steps in your professional journey.

## How It Works
1. **Take the Quiz**: Answer a series of questions related to your strengths, interests, and aspirations.
2. **Receive Career Suggestions**: Based on your responses, we suggest careers that align with your profile.
3. **Explore and Plan**: Use the suggestions to explore more about different fields and plan your career path.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (Backend)
- [MongoDB](https://www.mongodb.com/) (Database)
- [React](https://reactjs.org/) (Frontend)
- [Tailwind CSS](https://tailwindcss.com/) (Design)

### Steps to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbdulWasaySaleem/CareerGuide
   cd career-guide
   ```

2. **Install Backend Dependencies**:
   - Navigate to the backend directory and install the dependencies:
     ```bash
     cd backend
     npm install
     ```

3. **Install Frontend Dependencies**:
   - Navigate to the frontend directory and install the dependencies:
     ```bash
     cd frontend
     npm install
     ```

4. **Setup Environment Variables**:
   - Create an `.env` file in the root of both the `client` and `server` directories and add the following environment variables:

   **Client Environment Variables** (in `client/.env`):
   ```bash
   VITE_API_URL=http://localhost:5000/api
   ```

   **Server Environment Variables** (in `server/.env`):
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Make sure to replace `your_mongodb_connection_string` with your actual MongoDB URI and `your_jwt_secret` with your desired secret key for JWT authentication.

5. **Run MongoDB**:
   - Make sure MongoDB is running on your local machine or connect it to a cloud instance (like MongoDB Atlas).

6. **Start the Backend**:
   - In the `server` directory, run:
     ```bash
     npm start
     ```

7. **Start the Frontend**:
   - In the `client` directory, run:
     ```bash
     npm run dev
     ```

8. **Access the Application**:
   - Open your browser and access the app at `http://localhost:3000`.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Contributing
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Any suggestions or improvements are always welcome!

## Contact
For any inquiries, please feel free to reach out to 07.abdulwasayy@gmail.com.
```