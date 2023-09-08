const jwt = require("jsonwebtoken");
const { admins } = require("../shared/shared");

class AuthController {
    login(req, res) {
        const { email, password } = req.body;
        const target = admins.find(
            (item) => item.username === email && item.password === password
        );
        // delete target.password;
        if (target) {
            const { id, username, role } = target;
            const accessToken = jwt.sign(
                {
                    id,
                    username,
                    role,
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "2 days" }
            );
            res.json({ accessToken });
        } else {
            res.sendStatus(401);
        }
    }

    getUser(req, res) {
        res.json(req.user);
    };
}

module.exports = new AuthController;
