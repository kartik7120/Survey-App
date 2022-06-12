const JWT = require("jsonwebtoken");
const checkUserAuthentication = (req, res, next) => {
    const token = req.header("o-auth-token");
    if (!token) {
        return res.status(404).json("Token not found");
    }
    try {
        const payload = JWT.verify(token, process.env.SECRET);
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports = checkUserAuthentication;