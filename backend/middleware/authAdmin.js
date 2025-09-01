import jwt from "jsonwebtoken";

const authAdmin = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token)
      return res
        .status(403)
        .send({ success: false, message: "Not Authorized" });

    const decode_token = jwt.verify(token, process.env.JWT_SECRET);

    if (decode_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(403)
        .send({ success: false, message: "Not Authorized" });
    }
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid credentials" });
    console.log(error);
  }
};

export default authAdmin;
