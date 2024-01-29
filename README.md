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
- To create a product -> POST: http://localhost:4000/products/create
- To view all products -> GET: http://localhost:4000/products
- To update a product's quantity -> POST: http://localhost:4000/products/id/update_quantity?quantity=value (id represents the id of the product, value is the desired quantity)
- To delete a product -> DELETE: http://localhost:4000//products/:id

## Folder Structure

- config: This directory contains configuration files for your project. In this case, mongoose.js holds the configuration for connecting to MongoDB.
- controllers: Here, productController.js contains the logic for handling requests related to product operations.
- models: This directory holds the data models of your application. productSchema.js defines the schema for the product model, and index.js exports all the models.
- routes: The products.js file inside this directory defines the routes for handling product-related requests.
- node_modules: This is where the dependencies are installed by npm.
- .gitignore: This file specifies which files and folders should be ignored by Git.
- index.js: The main entry point for your application.
- package-lock.json: Automatically generated for any operations where npm modifies either the node_modules tree or package.json.
- package.json: This file contains metadata about the project, including dependencies and scripts to run tasks.

## Note
This API is designed for beginners and serves as a simple example for managing product inventory in an ecommerce platform. Ensure that you have Node.js and MongoDB installed before running the application. For any issues or improvements, feel free to create an issue or pull request.
