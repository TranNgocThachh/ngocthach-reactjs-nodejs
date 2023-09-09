const { customers, orders } = require("../shared/shared");

class DashboardController {
  getDataDashboard(req, res) {

    let totalUsers = customers.length;
    let totalOrders = orders.length;

    let totalProfit = 0;
    orders.map((order) => {
      let profit = order.products.reduce((acc, product) => acc + (product.quantity * (product.saleprice - product.entryprice)), 0)
      return totalProfit += profit;
    })

    console.log(totalUsers);
    console.log(totalOrders);
    console.log(totalProfit);

    res.json({ totalUsers, totalProfit, totalOrders });

  };
}

module.exports = new DashboardController;