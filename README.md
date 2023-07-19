# Todo API

This is a simple API for managing todos.

## Prerequisites

- Node.js
- MongoDB
- Docker (optional)

## Installation

1. Clone the repository.
2. Install dependencies by running `npm install`.

## Configuration

The application requires a MongoDB connection string. You can provide it through either of the following methods:

- **Method 1: Environment Variable (Recommended)**
  1. Create a `.env` file in the root directory.
  2. Add the following line to the `.env` file:
     ```
     MONGODB_CONNECTION_STRING=<your-connection-string>
     ```
  3. Replace `<your-connection-string>` with your actual MongoDB connection string.

- **Method 2: Directly in Code**
  1. Open `src/app.module.ts`.
  2. Locate the `MongooseModule.forRoot()` method call.
  3. Replace the connection string argument with your MongoDB connection string.

## API Endpoints

### Create a Todo

- **URL**: `/todos`
- **Method**: `POST`
- **Body**:
  - Single todo: `{ "task": "Todo task", "timelimit": "2023-07-19" }`
  - Multiple todos: `[ { "task": "Todo 1", "timelimit": "2023-07-19" }, { "task": "Todo 2", "timelimit": "2023-07-20" } ]`

### Update a Todo

- **URL**: `/todos/:id`
- **Method**: `PATCH`
- **URL Params**: `id=[string]`
- **Body**: `{ "task": "Updated task" }`

### Delete a Todo

- **URL**: `/todos/:id`
- **Method**: `DELETE`
- **URL Params**: `id=[string]`

### Running Locally

1. Start the server by running `npm run start`.
2. The API will be available at `http://localhost:5001`.

### Docker
You can also run the application using Docker:

1. Build the Docker image:
   ```shell
   docker build -t todo .
