# Node.js Server Freeze Example

This repository demonstrates a common issue in Node.js where a long-running operation in the request handler can block the event loop, causing the server to freeze and become unresponsive to new requests.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution using asynchronous operations.

## Running the Code

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the server freeze after making a request.
4. Run `node bugSolution.js` to see the corrected implementation.

## Understanding the Problem

Node.js uses a single-threaded event loop.  When a long-running operation is executed synchronously within the request handler, it blocks the event loop from processing other events, such as handling new incoming requests.  This results in a frozen server.