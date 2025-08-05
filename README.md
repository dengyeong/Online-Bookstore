# 🖥️ Online Bookstore API

A lightweight Node.js server that simulates an Online Bookstore API, ideal for testing, frontend integration, and development. It includes validation to reject requests with invalid parameters or request bodies.


## 📁 Project Purpose

This server serves as a mock server that mimics an Online Bookstore API backend server. It comes preloaded with two books and provides endpoints to: 

- Retrieve all books
- Retrieve a book by its ID
- Add a new book

## ⚙️ Configuration

The server relies on a `server.config.json` file to define HTTP server port.


## 🧰 Configuration Options

| Key            | Type    | Description                                                                             |
| -------------- | ------- | --------------------------------------------------------------------------------------- |
| `port`         | number  | Port number to bind the HTTP server. |

## 📄 Sample `server.config.json`

```json
{
  "port": 3000
}
```


## 📄 Preconfigured Response Data
The server comes bundled with default response data defined in `bookData.ts`, which is automatically used when the server starts.


## 📦 Build

To generate the production bundled file, run:

```bash
npm run build
```

This creates the `server.min.js` in the `dist` folder using `webpack`


## 🖥️ Usage

* **To run the source version**, use `npm run start` in the project root directory.
* **To run the bundled version**, use `node dist/server.min.js` in the project root directory.


## 📁 Where to place `server.config.json`

* **To run the source version**, `server.config.json` need to be placed in the directory `/src/config/`.
* **To run the bundled version**, `server.config.json` need to be placed in the same directory where the `server.min.js` is run.

## 📘 Swagger API Docs (Development Only)

The project includes Swagger documentation for easier API exploration and testing. It is available only in development mode. Please take note that the Swagger documentation is not available if the server is run using the bundled `server.min.j`. Start the server using:

```bash
npm run start
```

Then, open your browser and navigate to:

```bash
http://localhost:<port>/api-docs
```

Replace `<port>` with the value defined in `server.config.json`.

## 🧪 Testing
To run unit tests:

```bash
npm run test
```

This will execute all tests and provide a summary of results.

---