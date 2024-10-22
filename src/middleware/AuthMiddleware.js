const { DecodeToken } = require("../utility/TokenHelper");

const AuthverifyMiddleware = (req, res, next) => {
    let token = req.headers['token'] || req.cookies['token'];
    console.log("Token from headers or cookies:", token);

    if (!token) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    }

    let decode = DecodeToken(token);
    console.log("Decoded Token:", decode);

    if (decode === null) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    } else {
        let email = decode['email'];
        let user_id = decode['user_id'];
        req.headers.email = email;
        req.headers.user_id = user_id;
        next();
    }
}


module.exports = AuthverifyMiddleware