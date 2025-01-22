import Image from "next/image";

const TopCategory = () => {
    return (
        <main className="border rounded-lg bg-white w-full p-8 shadow-md">
            <h2 className="font-semibold text-[#009ef7] mb-6">
                In-house Top Category
            </h2>
            <div>
                <p className="text-sm text-slate-400 font-semibold">By Sales</p>
                <div className="flex gap-1 mt-2">
                    <button className="text-xs bg-[#009ef7] text-white px-2 py-1 rounded-md">
                        All
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-[#009ef7] duration-300 px-2 py-1 rounded-md">
                        All
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-[#009ef7] duration-300 px-2 py-1 rounded-md">
                        Today
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-[#009ef7] duration-300 px-2 py-1 rounded-md">
                        Week
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-[#009ef7] duration-300 px-2 py-1 rounded-md">
                        Month
                    </button>
                </div>
            </div>

            <section className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-[50px] h-[50px] overflow-hidden border rounded-md">
                            <Image
                                src="https://doubleboriginal.com/public/uploads/all/SC35Hysjn8Ldxve5XCz8hpbgSrxpjjQWFjWxBsii.png"
                                width={100}
                                height={100}
                                alt="picture"
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-gray-800 font-semibold">
                            SNEAKER
                        </p>
                    </div>
                    <p className="text-sm text-pink-600 font-semibold">৳27,200.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-[50px] h-[50px] overflow-hidden border rounded-md">
                            <Image
                                src="https://doubleboriginal.com/public/uploads/all/SC35Hysjn8Ldxve5XCz8hpbgSrxpjjQWFjWxBsii.png"
                                width={100}
                                height={100}
                                alt="picture"
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-gray-800 font-semibold">
                        PANTS
                        </p>
                    </div>
                    <p className="text-sm text-pink-600 font-semibold">৳27,200.00</p>
                </div>
            </section>
        </main>
    );
};

export default TopCategory;
