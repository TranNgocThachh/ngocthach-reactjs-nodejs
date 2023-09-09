const orders = [
    { 
        id: 1,
        products: [
            {
                id: 1,
                quantity: 2,
                salePrice: 10000,
                entryPrice: 5000
            },
            {
                id: 2,
                quantity: 2,
                salePrice: 7000,
                entryPrice: 3000
            },
            {
                id: 3,
                quantity: 1,
                salePrice: 8000,
                entryPrice: 4000
            },
        ]
    },
    { 
        id: 2,
        products: [
            {
                id: 1,
                quantity: 2,
                salePrice: 10000,
                entryPrice: 5000
            },
            {
                id: 2,
                quantity: 2,
                salePrice: 7000,
                entryPrice: 3000
            },
            {
                id: 3,
                quantity: 1,
                salePrice: 8000,
                entryPrice: 4000
            },
        ]
    },
]

let totalProfit = 0; 
let dataOrders = orders.map((order) => {
    let profit = order.products.reduce((acc, product) => acc + (product.quantity * (product.salePrice - product.entryPrice)), 0)
    return totalProfit += profit;
})
console.log(totalProfit);