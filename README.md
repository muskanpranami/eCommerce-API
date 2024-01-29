## Ecommerce Platform Admin API

## Tech Stack
- Node.js
- MongoDB
- Postman for testing

## Getting Started
- Clone the repository: git clone https://github.com/muskanpranami/eCommerce-API.git
- Install dependencies: npm install
- Set up MongoDB connection in the config folder
- Start the server: npm start
- Open Postman on port 4000, and follow the instructions mentioned in API Endpoints Section

## Models/Schemas
**Products**
Fields:
- id (auto-generated)
- name (string)
- quantity (number)

## API Endpoints
To create a product -> POST: http://localhost:4000/products/create
To view all products -> GET: http://localhost:4000/products
To update a product's quantity -> POST: http://localhost:4000/products/id/update_quantity?quantity=value (id represents the id of the product, value is the desired quantity)
To delete a product -> DELETE: http://localhost:4000//products/:id

## Note
This API is designed for beginners and serves as a simple example for managing product inventory in an ecommerce platform. Ensure that you have Node.js and MongoDB installed before running the application. For any issues or improvements, feel free to create an issue or pull request.
