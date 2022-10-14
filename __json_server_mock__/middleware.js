module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "./login") {
    if (req.body.username === "jack" && req.body.password === "123456") {
      return res.ststus(200).json({
        user: {
          token: "123",
        },
      }); //登录成功
    } else {
      return res.ststus(400).json({ message: "用户名或者密码错误" });
    } //登录失败
  }
};
