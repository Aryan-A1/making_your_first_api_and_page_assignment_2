// Boilerplate Code for HTTP Status Code API
const express = require("express");
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

// Status code messages
const statusMessages = {
  200: "OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
  201: "Created: A resource has been successfully created.",
  204: "No Content: Request processed successfully, no content returned.",
  400: "Bad Request: The request is invalid due to client-side errors.",
  401: "Unauthorized: Authentication is required to access the resource.",
  403: "Forbidden: Server refuses to authorize the request.",
  404: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
  405: "Method Not Allowed: HTTP method not supported for this resource.",
  429: "Too Many Requests: User has exceeded rate limits.",
  500: "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
  502: "Bad Gateway: The server received an invalid response from the upstream server.",
  503: "Service Unavailable: Server temporarily overloaded or under maintenance.",
  504: "Gateway Timeout: The server did not receive a timely response from the upstream server.",
};

// Status Code API endpoint
app.get("/status-info", (req, res) => {
  const code = parseInt(req.query.code);

  if (!code) {
    return res.status(400).json({
      status: 400,
      message:
        "Bad Request: Please provide a status code using the 'code' query parameter.",
    });
  }

  if (statusMessages[code]) {
    return res.json({
      status: code,
      message: statusMessages[code],
    });
  } else {
    return res.status(400).json({
      status: 400,
      message: "Bad Request: The provided status code is not supported.",
    });
  }
});

// Virtual Assistant API endpoint
app.get("/assistant/greet", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({
      status: 400,
      message:
        "Bad Request: Please provide a name using the 'name' query parameter.",
    });
  }

  return res.json({
    status: 200,
    message: `Hello ${name}! How can I assist you today?`,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
