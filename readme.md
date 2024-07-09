# NodeJS CRUD Application

## Overview
This is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and EJS templating engine. The application manages a list of comments where users can add, view, modify, and delete comments.

## Features
- Add new comments
- View all comments
- Modify existing comments
- Delete comments

## Technologies Used
- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [EJS](https://ejs.co/) - Embedded JavaScript templating
- [Bootstrap](https://getbootstrap.com/) - Frontend framework for building responsive websites
- [uuid](https://www.npmjs.com/package/uuid) - Library to generate unique IDs
- [method-override](https://www.npmjs.com/package/method-override) - Middleware to support HTTP verbs such as PUT or DELETE in places where the client doesn’t support it

## Installation

### Prerequisites
- Node.js (>=18.20.4)
- npm (Node Package Manager)

### Steps
1. Clone the repository
    ```sh
    git clone git@github.com:wmalhojay/NodeJScrud.git
    cd NodeJScrud
    ```
2. Install dependencies
    ```sh
    npm install
    ```
3. Run the application
    ```sh
    npm start
    ```

The application will start running on `http://localhost:8080`.

## Project Structure

├─index.js # Main entry point
│ package.json # Project metadata and dependencies
│ README.md # Project documentation
│
├───public
│ ├───css
│ │ bootstrap.css # Bootstrap CSS file
│ └───js
│ bootstrap.bundle.js # Bootstrap JS file
│
└───views
├───comments
│ index.ejs # Template for displaying comments
│ new.ejs # Template for adding a new comment
│ modify.ejs # Template for modifying a comment
└───partials
header.ejs # Common header template


## Usage

### Viewing Comments
Navigate to `http://localhost:8080/` to view all comments.

### Adding a New Comment
Navigate to `http://localhost:8080/comment/new` to add a new comment. Fill in the user and comment fields and click submit.

### Modifying a Comment
Click on the "modify" button next to the comment you want to edit. Update the comment and click the update button.

### Deleting a Comment
Click on the "delete" button next to the comment you want to delete.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Contact
For any inquiries, please reach out to [wmalhojay](https://github.com/wmalhojay).

