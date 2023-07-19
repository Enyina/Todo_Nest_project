# Todo API

This is a simple API for managing todos.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Set up the MongoDB connection by replacing the `url` in `src/main.ts` with your MongoDB connection URL.
4. Start the server by running `npm run start`.

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

## Testing

To run the tests, execute the following command:

```shell
npm run test
