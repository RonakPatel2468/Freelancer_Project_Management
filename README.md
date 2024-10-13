#  Freelancer_Project_Management Backend API

This is a backend API built with **Node.js**, **Express**, and **MongoDB**. It handles user authentication, project management, payment simulations, and includes bulk export/import features using CSV. The project follows a scalable architecture using controllers, models, middlewares, and utilities.

## Features

- **JWT-based User Authentication**: Secure authentication for users to access the backend.
- **Project Management API**: Create, read, update, delete (CRUD) projects.
- **Payment Management API**: Simulate payments and mark payments as paid.
- **Bulk Import/Export of Projects**: Export project data to CSV and import bulk data from a CSV file.
- **MongoDB for Storage**: Using Mongoose for handling project and payment data.
- **Error Handling & Security**: Implemented global error handling and basic security measures like Helmet and Rate limiting.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing project and payment data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For secure user authentication.
- **Multer**: For file uploads (CSV import).
- **CSV-Parser**: For handling CSV files.



### Installation

1. Clone the repository:

   ```bash
 https://github.com/RonakPatel2468/Freelancer_Project_Management.git
   cd project-payment-management


API Routes

User Authentication

POST /api/auth/register: Register a new user.
POST /api/auth/login: Login user and receive JWT.

Project Management

POST /api/projects: Create a new project.
GET /api/projects: Get all projects.
PUT /api/projects/:id: Update a project by ID.
DELETE /api/projects/:id: Delete a project by ID.
GET /api/projects/export: Export all projects to CSV.
POST /api/projects/import: Import projects from a CSV file.

Payment Management

POST /api/payments: Create a new payment.
PUT /api/payments/:id/mark-as-paid: Mark a payment as paid.



### Instructions for Adding Links:
1. Replace `https://github.com/RonakPatel2468/Freelancer_Project_Management.git` with the actual link to your GitHub repository.
2. Replace `https://freelancer-project-management-f6yg.onrender.com` with the actual URL of your deployed API on Render.

This `README.md` file provides everything needed to understand the project, install it, and run the backend API.

