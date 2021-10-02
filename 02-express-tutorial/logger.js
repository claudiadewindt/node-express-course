const logger = (req, res, next) => {
  const method = req.method; // GET
  const url = req.url; // /
  const time = new Date().getFullYear(); // 2021
  console.log(method, url, time); // GET / 2021
  //If we don't pass the response we have to use next
  next();
};

module.exports = logger;
