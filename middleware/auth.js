const auth = (request, response, next) => {
  const { authorized } = request.body;
  console.log(authorized);
  if (authorized) {
    next();
  } else {
    response.status(401).send({ msg: "you are not authorized" });
  }
};
module.exports = auth;
