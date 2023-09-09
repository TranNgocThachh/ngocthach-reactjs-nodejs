const { customers, orders } = require("../shared/shared");

class DashboardController {
  getDataDashboard(req, res) {

    let totalUsers = customers.length;
    let totalProfit = orders.products.reduce((acc, products) => {
      return acc += (products.quantity * (products.salePrice - products.entryPrice));
    }, 0)
    let totalOrders = orders.length;
    console.log(totalUsers);
    console.log(totalOrders);
    console.log(totalProfit);

    res.json({ totalUsers, totalProfit, totalOrders });

  };
}

module.exports = new DashboardController;