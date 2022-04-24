const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Tim");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);
// ////////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Hello Seattle, I'm listening...");
  console.log(req.url);
  res.end("- Frasier");
});

// server.on("request", (req, res) => {
//   console.log("Hello Seattle, I'm listening...");
//   res.end("- Frasier");
// });

server.on("request", (req, res) => {
  console.log("Hello Seattle, let's get better!");
  //   res.end("- Nials");
});

server.on("close", () => {
  console.log("This is Frasier Crane, goodbye Seattle.");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Ros who's our next caller?");
});
