const SaleStat = () => {
    return (
        <main className="border rounded-lg bg-white w-full p-8 shadow-md grid grid-cols-1 sm:grid-cols-2 gap-8">
            <section className="flex flex-col justify-between">
                <div className="p-8 rounded-lg min-h-[300px] flex flex-col justify-between">
                    <div>
                        <p className=" text-gray-800 font-semibold mb-6">
                            In-house Store
                        </p>
                        <p className="text-3xl text-gray-800 font-semibold mb-1">
                            ৳43,700.00
                        </p>
                        <p className="text-sm text-gray-800 font-semibold">
                            Total Sales
                        </p>
                    </div>
                </div>
                <div className="bg-[#f4effe] mt-4 px-5 py-3 text-center text-violet-600 text-sm font-medium rounded-lg">
                    All in house Orders
                </div>
            </section>
            <section className="space-y-5">
                <div className="bg-[#eef0f2] p-8 rounded-lg">
                    <p className="text-3xl text-gray-800 font-semibold">
                        231
                    </p>
                    <p className="text-sm text-blue-500 font-semibold">Inhouse product</p>
                </div>
                <div className="bg-[#eef0f2] p-8 rounded-lg">
                    <p className="text-3xl text-gray-800 font-semibold">
                        0.00
                    </p>
                    <p className="text-sm text-yellow-500 font-semibold">Ratings</p>
                </div>
                <div className="bg-[#eef0f2] p-8 rounded-lg">
                    <p className="text-3xl text-gray-800 font-semibold">
                        8
                    </p>
                    <p className="text-sm text-violet-600 font-semibold">Total orders</p>
                </div>
            </section>
        </main>
    );
};

export default SaleStat;
