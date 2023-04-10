const http = require("http");
const axios = require("axios");

axios
  .get("http://localhost:3000")
  .then((res) => {
    console.log(res.status);

    console.log(res.data);
  })
  .catch((error) => console.error(error));

// // configure a request
// const req = http.request("http://localhost:3000", (res) => {
//   console.log(res.statusCode);

//   res.setEncoding("utf8");

//   // subscribes on receiving a portion of response data
//   res.on("data", (data) => {
//     // process a portion of a response data here
//     console.log(data);
//   });
// });

// // subscribes on any request error
// req.on("error", (error) => {
//   // handle an error here
//   console.error(error);
// });

// // sends the request
// req.end();
