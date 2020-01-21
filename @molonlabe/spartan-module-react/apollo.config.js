require("dotenv").config();

module.exports = {
  client: {
    service: {
      name: process.env.REACT_APP_SERVICE_NAME,
      url: process.env.REACT_APP_SERVICE_URI
    }
  }
};
