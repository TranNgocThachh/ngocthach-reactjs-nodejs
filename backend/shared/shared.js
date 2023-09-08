function pagination(array, page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return array.slice(startIndex, endIndex);
}

function totalPage(array, perPage) {
    return Math.ceil(array.length / perPage);
}

function nextId(list) {
    let maxId;
    if (list.length === 0) {
        return maxId = 1;
    } else {
        maxId = list[list.length - 1].id + 1;
    }
    return maxId;
}

const admins = [
    { id: 1, username: "admin@gmail.com", password: "admin123", role: "admin" },
    { id: 2, username: "admin2@gmail.com", password: "admin456", role: "admin" },
    { id: 3, username: "user@gmail.com", password: "user123", role: "user" },
    { id: 4, username: "cus01@gmail.com", password: "123456", role: "anonymous" },
    { id: 5, username: "cus02@gmail.com", password: "123456", role: "anonymous" },
];

const employees = [
    {
        id: 1,
        fullname: "Tran Ngoc Thach",
        position: "manager",
        phonenumber: "0919526788",
        email: "abc@gmail.com",
        address: "123 Bui Thi Xuan",
    },
    {
        id: 2,
        fullname: "Vo Gia Phuc",
        position: "staff",
        phonenumber: "0834354677",
        email: "def@gmail.com",
        address: "Cu Chi",
    },
    {
        id: 3,
        fullname: 'employee 3',
        position: 'staff',
        phonenumber: '0903044763',
        email: 'employee3@gmail.com',
        address: 'Địa chỉ 3'
    },
    {
        id: 4,
        fullname: 'employee 4',
        position: 'staff',
        phonenumber: '0903044764',
        email: 'employee4@gmail.com',
        address: 'Địa chỉ 4'
    },
    {
        id: 5,
        fullname: 'employee 5',
        position: 'staff',
        phonenumber: '0903044765',
        email: 'employee5@gmail.com',
        address: 'Địa chỉ 5'
    },
    {
        id: 6,
        fullname: 'employee 6',
        position: 'staff',
        phonenumber: '0903044766',
        email: 'employee6@gmail.com',
        address: 'Địa chỉ 6'
    },
    {
        id: 7,
        fullname: 'employee 7',
        position: 'staff',
        phonenumber: '0903044767',
        email: 'employee7@gmail.com',
        address: 'Địa chỉ 7'
    },
    {
        id: 8,
        fullname: 'employee 8',
        position: 'staff',
        phonenumber: '0903044768',
        email: 'employee8@gmail.com',
        address: 'Địa chỉ 8'
    },
    {
        id: 9,
        fullname: 'employee 9',
        position: 'staff',
        phonenumber: '0903044769',
        email: 'employee9@gmail.com',
        address: 'Địa chỉ 9'
    },
    {
        id: 10,
        fullname: 'employee 10',
        position: 'staff',
        phonenumber: '0903044710',
        email: 'employee10@gmail.com',
        address: 'Địa chỉ 10'
    },
    {
        id: 11,
        fullname: 'employee 11',
        position: 'staff',
        phonenumber: '0903044711',
        email: 'employee11@gmail.com',
        address: 'Địa chỉ 11'
    },
    {
        id: 12,
        fullname: 'employee 12',
        position: 'staff',
        phonenumber: '0903044712',
        email: 'employee12@gmail.com',
        address: 'Địa chỉ 12'
    },
    {
        id: 13,
        fullname: 'employee 13',
        position: 'staff',
        phonenumber: '0903044713',
        email: 'employee13@gmail.com',
        address: 'Địa chỉ 13'
    },
    {
        id: 14,
        fullname: 'employee 14',
        position: 'staff',
        phonenumber: '0903044714',
        email: 'employee14@gmail.com',
        address: 'Địa chỉ 14'
    },
    {
        id: 15,
        fullname: 'employee 15',
        position: 'staff',
        phonenumber: '0903044715',
        email: 'employee15@gmail.com',
        address: 'Địa chỉ 15'
    },
    {
        id: 16,
        fullname: 'employee 16',
        position: 'staff',
        phonenumber: '0903044716',
        email: 'employee16@gmail.com',
        address: 'Địa chỉ 16'
    },
    {
        id: 17,
        fullname: 'employee 17',
        position: 'staff',
        phonenumber: '0903044717',
        email: 'employee17@gmail.com',
        address: 'Địa chỉ 17'
    },
    {
        id: 18,
        fullname: 'employee 18',
        position: 'staff',
        phonenumber: '0903044718',
        email: 'employee18@gmail.com',
        address: 'Địa chỉ 18'
    },
    {
        id: 19,
        fullname: 'employee 19',
        position: 'staff',
        phonenumber: '0903044719',
        email: 'employee19@gmail.com',
        address: 'Địa chỉ 19'
    },
];

const customers = [
    {
        id: 1,
        cusname: 'Customer 01',
        phonenumber: '0918093321',
        groupname: 'group01',
        email: 'cus01@gmail.com',
        address: 'Address 01'
    },
    {
        id: 2,
        cusname: 'Customer 02',
        phonenumber: '0918093322',
        groupname: 'group01',
        email: 'cus02@gmail.com',
        address: 'Address 02'
    },
    {
        id: 3,
        cusname: 'Customer 03',
        phonenumber: '0918093323',
        groupname: 'group01',
        email: 'cus03@gmail.com',
        address: 'Address 03'
    },
    {
        id: 4,
        cusname: 'Customer 04',
        phonenumber: '0918093324',
        groupname: 'group01',
        email: 'cus04@gmail.com',
        address: 'Address 04'
    },
    {
        id: 5,
        cusname: 'Customer 05',
        phonenumber: '0918093325',
        groupname: 'group02',
        email: 'cus05@gmail.com',
        address: 'Address 05'
    },
    {
        id: 6,
        cusname: 'Customer 06',
        phonenumber: '0918093326',
        groupname: 'group02',
        email: 'cus06@gmail.com',
        address: 'Address 06'
    },
    {
        id: 7,
        cusname: 'Customer 07',
        phonenumber: '0918093327',
        groupname: 'group02',
        email: 'cus07@gmail.com',
        address: 'Address 07'
    },
    {
        id: 8,
        cusname: 'Customer 08',
        phonenumber: '0918093328',
        groupname: 'group02',
        email: 'cus08@gmail.com',
        address: 'Address 08'
    },
    {
        id: 9,
        cusname: 'Customer 09',
        phonenumber: '0918093329',
        groupname: 'group02',
        email: 'cus09@gmail.com',
        address: 'Address 09'
    },
    {
        id: 10,
        cusname: 'Customer 10',
        phonenumber: '0918093310',
        groupname: 'group03',
        email: 'cus10@gmail.com',
        address: 'Address 10'
    },
    {
        id: 11,
        cusname: 'Customer 11',
        phonenumber: '0918093311',
        groupname: 'group03',
        email: 'cus11@gmail.com',
        address: 'Address 11'
    },
    {
        id: 12,
        cusname: 'Customer 12',
        phonenumber: '0918093312',
        groupname: 'group03',
        email: 'cus12@gmail.com',
        address: 'Address 12'
    },
    {
        id: 13,
        cusname: 'Customer 13',
        phonenumber: '0918093313',
        groupname: 'group03',
        email: 'cus13@gmail.com',
        address: 'Address 13'
    },
    {
        id: 14,
        cusname: 'Customer 14',
        phonenumber: '0918093314',
        groupname: 'group03',
        email: 'cus14@gmail.com',
        address: 'Address 14'
    },
    {
        id: 15,
        cusname: 'Customer 15',
        phonenumber: '0918093315',
        groupname: 'group03',
        email: 'cus15@gmail.com',
        address: 'Address 15'
    },
    {
        id: 16,
        cusname: 'Customer 16',
        phonenumber: '0918093316',
        groupname: 'group03',
        email: 'cus16@gmail.com',
        address: 'Address 16'
    },
    {
        id: 17,
        cusname: 'Customer 17',
        phonenumber: '0918093317',
        groupname: 'group03',
        email: 'cus17@gmail.com',
        address: 'Address 17'
    },
    {
        id: 18,
        cusname: 'Customer 18',
        phonenumber: '0918093318',
        groupname: 'group03',
        email: 'cus18@gmail.com',
        address: 'Address 18'
    },
    {
        id: 19,
        cusname: 'Customer 19',
        phonenumber: '0918093319',
        groupname: 'group03',
        email: 'cus19@gmail.com',
        address: 'Address 19'
    },
    {
        id: 20,
        cusname: 'Customer 20',
        phonenumber: '0918093320',
        groupname: 'group03',
        email: 'cus20@gmail.com',
        address: 'Address 20'
    }
]

const groupCustomer = [
    { id: 'group01', name: 'Loyah' },
    { id: 'group02', name: 'Potential' },
    { id: 'group03', name: 'Old' },
]


let products = [
    { id: 1, proname: 'Apple MacBook Pro 17"', category: 'Apple', color: 'Gray', quantity: 35, entryprice: 30000000, price: 45000000, discount: 0, image: 'https://laptopvang.com/wp-content/uploads/2023/01/macbook_pro_16_inch_2023_m2_max_Space_gray-600x600.png' },
    { id: 2, proname: 'Dell XPS 15', category: 'Dell', color: 'Silver', quantity: 25, entryprice: 25000000, price: 35000000, discount: 10, image: 'https://laptop88.vn/media/news/1008_Dellxps15.jpg' },
    { id: 3, proname: 'HP Spectre x360 15.6', category: 'HP', color: 'Black', quantity: 50, entryprice: 20000000, price: 30000000, discount: 20, image: 'https://laptoptitan.vn/wp-content/uploads/2020/10/HP-Spectre-X360-15-002.jpg' },
    { id: 4, proname: 'Asus ROG Zephyrus G14', category: 'Asus', color: 'Black', quantity: 20, entryprice: 18000000, price: 28000000, discount: 10, image: 'https://www.tncstore.vn/image/cache/catalog/Laptop%20Asus/G14%20GA401I-HHE042T/laptop-asus-rog-zephyrus-g14-ga401i-hhe042t-3-500x500.jpg' },
    { id: 5, proname: 'Lenovo ThinkPad X1 Carbon Gen 10"', category: 'Lenovo', color: 'Black', quantity: 30, entryprice: 22000000, price: 32000000, discount: 0, image: 'https://laptopworld.vn/media/product/12368_lenovo_thinkpad_x1_carbon_gen_10_4.jpg' },
    { id: 6, proname: 'Microsoft Surface Laptop 4', category: 'Microsoft', color: 'Platinum', quantity: 40, entryprice: 24000000, price: 34000000, discount: 10, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/s/u/surface-laptop-4-02.jpg' },
    { id: 7, proname: 'Acer Predator Helios 300"', category: 'Acer', color: 'Black', quantity: 15, entryprice: 15000000, price: 25000000, discount: 0, image: 'https://hanoicomputercdn.com/media/product/65758_laptop_acer_gaming_predator_helios_300_3.png' },
    { id: 8, proname: 'Razer Blade 15', category: 'Razer', color: 'Black', quantity: 10, entryprice: 28000000, price: 38000000, discount: 20, image: 'https://laptopgaumeo.vn/uploads/images/san-pham/razer-blade-15-advanced-2020/razer-blade-15-advanced-model-2020.jpg' },
    { id: 9, proname: 'Gigabyte Aero 15 OLED', category: 'Gigabyte', color: 'Black', quantity: 20, entryprice: 25000000, price: 35000000, discount: 0, image: 'https://nguyencongpc.vn/media/product/20009-gigabyte-aero-15-oled-xd-73s1624gh-9.jpg' },
    { id: 10, proname: 'MSI GE76 Raider', category: 'MSI', color: 'Black', quantity: 15, entryprice: 32000000, price: 42000000, discount: 20, image: 'https://product.hstatic.net/200000722513/product/-gaming-msi-raider-ge76-12uhs-480vn-2_c1146f707a554e27ae7d607a30df199c_578fe25ebfcc4714bb0b9f96e0dca7a0.jpg' },
    //
    { id: 11, proname: 'Alienware m15 R6', category: 'Alienware', color: 'Black', quantity: 25, entryprice: 30000000, price: 40000000, discount: 0, image: 'https://nguyencongpc.vn/media/lib/17-01-2022/2048459.png' },
    { id: 12, proname: 'Lenovo Legion Y540', category: 'Lenovo', color: 'Black', quantity: 20, entryprice: 20000000, price: 30000000, discount: 40, image: 'https://laptop88.vn/media/product/4519_artboard_2.png' },
    { id: 13, proname: 'Samsung Galaxy Book Flex2', category: 'Samsung', color: 'Mystic Bronze', quantity: 15, entryprice: 15000000, price: 25000000, discount: 10, image: 'https://cdn.tgdd.vn/Files/2020/12/18/1314663/samsung-galaxy-book-flex-2-1_800x532.jpg' },
    { id: 14, proname: 'Huawei MateBook X Pro', category: 'Huawei', color: 'Space Grey', quantity: 30, entryprice: 22000000, price: 32000000, discount: 0, image: 'https://didongmango.com/images/products/2022/11/01/small/huawei-matebook-x-pro-2022-53013fkr-142-ltps-laptop-ink-blue-touch-screen-i7-1260p-16gb-1tb-ssd-intel-w11-hs-_1667326115.jpg.jpg' },
    { id: 15, proname: 'LG Gram 14', category: 'LG', color: 'White', quantity: 18, entryprice: 18000000, price: 28000000, discount: 0, image: 'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/03/02/14zd90q-g-ax31a5-9.png' },
    { id: 16, proname: 'Sony VAIO S13', category: 'Sony', color: 'Silver', quantity: 22, entryprice: 25000000, price: 35000000, discount: 0, image: 'https://vn-live-02.slatic.net/p/2/laptop-sony-vaio-svt13124cxs-133inch-bac-hang-nhap-khau-1449628237-678431-1-catalog_233.jpg_800x800Q100.jpg' },
    { id: 17, proname: 'MSI Prestige 15', category: 'MSI', color: 'Pink', quantity: 12, entryprice: 23000000, price: 33000000, discount: 0, image: 'https://img.websosanh.vn/v2/users/root_product/images/laptop-msi-prestige-15/208pxmc5n7qyz.jpg?compress=85&width=200' },
    { id: 18, proname: 'Asus VivoBook 15', category: 'Asus', color: 'Silver', quantity: 28, entryprice: 18000000, price: 28000000, discount: 0, image: 'https://dlcdnwebimgs.asus.com/gain/18023f26-289a-486c-84b3-3ef88afa94fc/' },
    { id: 19, proname: 'Lenovo IdeaPad Slim 5i', category: 'Lenovo', color: 'Silver', quantity: 18, entryprice: 15000000, price: 25000000, discount: 0, image: 'https://laptopworld.vn/media/product/13011_lenovo_ideapad_slim_5i__7.jpg' },
    { id: 20, proname: 'Dell Inspiron 15', category: 'Dell', color: 'Black', quantity: 15, entryprice: 20000000, price: 30000000, discount: 0, image: 'https://synnexfpt.com/wp-content/uploads/2022/10/Inspiron-15-3.png' }
];

const orders = [
    {
        "id": 1,
        "cusname": "Customer 01",
        "phonenumber": "0908095583",
        "address": "Address 01",
        "products": [
            {
                "cartId": 1,
                "id": 3,
                "proname": "HP Spectre x360 15.6",
                "category": "HP",
                "color": "Black",
                "quantity": 1,
                "entryprice": 20000000,
                "price": 30000000,
                "discount": 20,
                "image": "https://laptoptitan.vn/wp-content/uploads/2020/10/HP-Spectre-X360-15-002.jpg",
                "saleprice": 24000000
            },
            {
                "cartId": 2,
                "id": 4,
                "proname": "Asus ROG Zephyrus G14",
                "category": "Asus",
                "color": "Black",
                "quantity": 1,
                "entryprice": 18000000,
                "price": 28000000,
                "discount": 10,
                "image": "https://www.tncstore.vn/image/cache/catalog/Laptop%20Asus/G14%20GA401I-HHE042T/laptop-asus-rog-zephyrus-g14-ga401i-hhe042t-3-500x500.jpg",
                "saleprice": 25200000
            }
        ],
        "totalCost": 49200000,
        "status": "pending"
    },
    {
        "id": 2,
        "cusname": "Customer 02",
        "phonenumber": "0834355567",
        "address": "Address 02",
        "products": [
            {
                "cartId": 1,
                "id": 12,
                "proname": "Lenovo Legion Y540",
                "category": "Lenovo",
                "color": "Black",
                "quantity": 1,
                "entryprice": 20000000,
                "price": 30000000,
                "discount": 40,
                "image": "https://laptop88.vn/media/product/4519_artboard_2.png",
                "saleprice": 18000000
            },
            {
                "cartId": 2,
                "id": 13,
                "proname": "Samsung Galaxy Book Flex2",
                "category": "Samsung",
                "color": "Mystic Bronze",
                "quantity": 1,
                "entryprice": 15000000,
                "price": 25000000,
                "discount": 10,
                "image": "https://cdn.tgdd.vn/Files/2020/12/18/1314663/samsung-galaxy-book-flex-2-1_800x532.jpg",
                "saleprice": 22500000
            }
        ],
        "totalCost": 40500000,
        "status": "pending"
    }
];

module.exports = {
    nextId,
    pagination,
    totalPage,
    admins,
    employees,
    customers,
    groupCustomer,
    products,
    orders,
}