# NestJS Application with PostgreSQL Database

## Description
This repository contains a NestJS application that demonstrates basic CRUD operations for user authentication and note management. PostgreSQL is used as the database, and the project is structured into modules for clarity.

## Key Features

### Authentication
- User registration.
- Get all users.
- Get user by ID.
- Update user information.
- Delete user.

### Notes Management
- Create a new note.
- Get all notes.
- Get note by ID.
- Update note information.
- Delete note.

## Getting Started
1. **Clone the repository.**
2. **Install dependencies:** `npm install`.
3. **Set up a PostgreSQL database:**
   - Create a PostgreSQL database.
   - Copy the `.env.example` file to `.env`.
   - Update the `.env` file with the appropriate credentials:

     ```plaintext
     # .env
     DATABASE_USER=your_database_user
     DATABASE_HOST=your_database_host
     DATABASE_NAME=your_database_name
     DATABASE_PASSWORD=your_database_password
     DATABASE_PORT=your_database_port
     ```

4. **Run the application:** `npm run start`.

## Environment Variables
- `DATABASE_USER`: Your PostgreSQL database user.
- `DATABASE_HOST`: PostgreSQL database host.
- `DATABASE_NAME`: Name of the PostgreSQL database.
- `DATABASE_PASSWORD`: Password for the PostgreSQL user.
- `DATABASE_PORT`: PostgreSQL database port.

**Note:** Ensure that you have Node.js and npm installed on your system.

## Customization
Feel free to customize and extend the functionality according to your requirements. If you encounter any issues or have questions, please refer to the official NestJS documentation or open an issue in this repository.

