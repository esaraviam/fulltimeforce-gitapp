const indexRoute = (req, res) => {
  const params = req.query;
  res.json({
    message: "alls good man",
    params,
  });
};

module.exports = {
  indexRoute,
};
