# Baxture_crud_api
# CRUD API with Horizontal Scaling and Load Balancing

This project implements a simple CRUD API using Node.js, Express, and in-memory database underneath. It also supports horizontal scaling with load balancing using Node.js Cluster.

## Features

- Create, Read, Update, and Delete (CRUD) operations for users
- Validation of user data
- Error handling middleware for proper error responses
- Horizontal scaling with load balancing
- Testing of API endpoints
- Environment-specific configurations for development and production modes

## Requirements

- Node.js 14 LTS or later
- npm (Node Package Manager)

## Installation

1. Clone the repository:

git clone https://github.com/piyushgautam16/Baxture_crud_api.git
cd Baxture_crud_api


Install dependencies:
npm install

Start the server:

Development mode:
npm run start:dev

Production mode:
npm run start:prod

Multi-instance mode with horizontal scaling and load balancing:
npm run start:multi

Environment Variables
The following environment variables can be set in a .env file in the root directory:
PORT: Port number for the server (default: 3000)

Testing
To run tests, execute the following command:
npm test

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License

This project is licensed under the MIT License.

Feel free to customize this template to fit your specific project needs. Let me know if you have any questions or need further assistance!




