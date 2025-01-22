import Image from "next/image";

const TopBrands = () => {
    return (
        <main className="border rounded-lg bg-white w-full p-8 shadow-md">
            <h2 className="font-semibold text-pink-600 mb-6">
            In-house Top Brands
            </h2>
            <div>
                <p className="text-sm text-slate-400 font-semibold">By Sales</p>
                <div className="flex gap-1 mt-2">
                    <button className="text-xs bg-pink-600 text-white px-2 py-1 rounded-md">
                        All
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-pink-600 duration-300 px-2 py-1 rounded-md">
                        All
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-pink-600 duration-300 px-2 py-1 rounded-md">
                        Today
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-pink-600 duration-300 px-2 py-1 rounded-md">
                        Week
                    </button>
                    <button className="text-xs text-slate-400 hover:text-white hover:bg-pink-600 duration-300 px-2 py-1 rounded-md">
                        Month
                    </button>
                </div>
            </div>

            <section className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-[50px] h-[50px] overflow-hidden border rounded-md flex justify-center items-center">
                            <Image
                                src="https://doubleboriginal.com/public/uploads/all/SSzKp8od4AwDU8rJc0a3s1taZPxdRj6AKPAGA0n0.jpg"
                                width={100}
                                height={100}
                                alt="picture"
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-gray-800 font-semibold">
                        JORDAN
                        </p>
                    </div>
                    <p className="text-sm text-pink-600 font-semibold">৳27,200.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-[50px] h-[50px] overflow-hidden border rounded-md flex justify-center items-center">
                            <Image
                                src="https://doubleboriginal.com/public/uploads/all/IYfzORSNtKlKvGNAj4vHJS8GPX06AECHrdCjm0zq.png"
                                width={100}
                                height={100}
                                alt="picture"
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-gray-800 font-semibold">
                        NIKE
                        </p>
                    </div>
                    <p className="text-sm text-pink-600 font-semibold">৳27,200.00</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-[50px] h-[50px] overflow-hidden border rounded-md flex justify-center items-center">
                            <Image
                                src="https://doubleboriginal.com/public/uploads/all/0j6ELPRcdPfGpizZ1ODR4vV9OV48n0FFpfRsFpHo.png"
                                width={100}
                                height={100}
                                alt="picture"
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-gray-800 font-semibold">
                        ADIDAS
                        </p>
                    </div>
                    <p className="text-sm text-pink-600 font-semibold">৳27,200.00</p>
                </div>
            </section>
        </main>
    );
};

export default TopBrands;
