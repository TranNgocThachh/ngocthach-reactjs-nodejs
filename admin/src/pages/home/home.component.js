import { useGetCustomersQuery } from "../../redux/api/customer.api.slice";


const Home = () => {
    const { data: customers } = useGetCustomersQuery({});
    let totalUsers = customers?.totalUsers;

    return (
        <div className="container mt-12">
            <div className="grid grid-cols-1 gap-6 mb-6 mx-4 lg:grid-cols-3">
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total users
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        {totalUsers}
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total Profit
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        450000 vnđ
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total Orders
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        10
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;