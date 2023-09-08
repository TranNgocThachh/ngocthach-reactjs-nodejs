const { pagination, totalPage, nextId, admins } = require("../shared/shared");

class AccountsController {
    getAccounts(req, res) {
        const { search, page } = req.query;
        let filterAccounts = admins;

        if (search) {
            filterAccounts = filterAccounts.filter(
                (acc) =>
                    acc.id.toString().toLowerCase().includes(search.toLowerCase()) ||
                    acc.username.toLowerCase().includes(search.toLowerCase()) ||
                    acc.password.toLowerCase().includes(search.toLowerCase()) ||
                    acc.role.toLowerCase().includes(search.toLowerCase())
            );
        }

        const paginatedAccounts = pagination(filterAccounts, page, 5);
        const totalPages = totalPage(filterAccounts, 5);

        res.json({ paginatedAccounts, totalPages });
    }

    getAccount(req, res) {
        const { id } = req.params;
        const account = admins.find(acc => acc.id === Number(id));
        if (account) {
            res.json(account)
        } else {
            res.sendStatus(404);
        }
    }

    addAccount(req, res) {
        let role = 'anonymous';
        const account = {
            id: nextId(admins),
            ...req.body,
            role
        };

        admins.push(account);
        res.json(account);
    }

    updateAccount(req, res) {
        const { id } = req.params;
        const { username, password, role } = req.body;

        const account = admins.find((acc) => acc.id === Number(id));
        if (account) {
            account.username = username || account.username;
            account.password = password || account.password;
            account.role = role || account.role;
        } else {
            res.sendStatus(404);
        }
    }

    deleteAccount(req, res) {
        const { id } = req.params;
        const account = admins.find((acc) => acc.id === Number(id));
        if (account) {
            admins.splice(admins.indexOf(account), 1);
            res.json(account);
        } else {
            res.sendStatus(404);
        }
    };
};

module.exports = new AccountsController;