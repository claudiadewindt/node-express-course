const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === 'john') {
    req.user = { name: 'john', id: 3 }; // http://localhost:5000/?user=john
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

module.exports = authorize;
