const TotalSales = () => {
    return (
        <main className="border rounded-lg bg-[#f1fafd] w-full p-8 shadow-md">
            <section>
                <p className="text-3xl text-[#009ef7] font-semibold">40.2K</p>
                <p className="text-xs text-[#009ef7] font-semibold">
                    Total Sales
                </p>
                <div className="bg-[#009ef7] px-5 py-4 rounded-lg flex items-center justify-between my-5">
                    <p className="text-sm text-white font-semibold">
                        Sales this month
                    </p>
                    <p className="text-sm text-white font-semibold">৳0.00</p>
                </div>
                <div>
                    <p className="text-sm text-[#009ef7] font-semibold">
                        Sales Stat
                    </p>
                    <div className="min-h-[140px] border-b"></div>
                    <div className="flex items-center gap-2 justify-center mt-3">
                        <div className="max-w-[15px] min-w-[15px] min-h-[15px] bg-gray-300 rounded-full border-2 border-[#009ef7]"></div>
                        <p className="text-sm text-gray-800 font-semibold">
                            Yearly Sales
                        </p>
                    </div>
                </div>
            </section>
            <section className="mt-7">
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2">
                        <div className="min-h-[10px] min-w-[10px] bg-violet-700 rounded-full"></div>
                        <p className="text-sm text-gray-800 font-semibold">
                        In-house Sales
                        </p>
                    </div>
                    <p className="text-sm text-gray-800 font-semibold">৳0.00</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2">
                        <div className="min-h-[10px] min-w-[10px] bg-[#19c553] rounded-full"></div>
                        <p className="text-sm text-gray-800 font-semibold">
                        Sellers Sales
                        </p>
                    </div>
                    <p className="text-sm text-gray-800 font-semibold">৳0.00</p>
                </div>
            </section>
        </main>
    );
};

export default TotalSales;
