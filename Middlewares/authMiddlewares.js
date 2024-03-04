import jwt from "jsonwebtoken";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  // console.log(req.headers.cookie.substring(7, req.headers.cookie.length));
  try {
    const token = req.headers.cookie.substring(7, req.headers.cookie.length);
    if (!token || token === undefined) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    //verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(payload);
      //why this ?
      req.user = payload;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "token is invalid , Cannot Authenticate the user",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong, while verifying/Authenticating the token",
      error: error.message,
    });
  }
};
