// index.js
const app = require('./config/server')
// Start the server
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(PORT,"port")
});
