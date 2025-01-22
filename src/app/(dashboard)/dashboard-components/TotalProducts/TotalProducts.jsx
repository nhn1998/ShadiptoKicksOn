const TotalProducts = () => {
    return (
        <main className="border rounded-lg bg-white w-full h-[220px] p-8 flex flex-col justify-between shadow-md">
            <section className="flex items-center justify-between">
                <div>
                    <p className="text-3xl text-gray-800 font-semibold">235</p>
                    <p className="text-sm text-gray-400 font-semibold">
                        Total Products
                    </p>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="27.429"
                        viewBox="0 0 32 27.429"
                    >
                        <g
                            id="Layer_2"
                            data-name="Layer 2"
                            transform="translate(-2 -4)"
                        >
                            <path
                                id="Path_40719"
                                data-name="Path 40719"
                                d="M32.857,4H3.143A1.143,1.143,0,0,0,2,5.143V12a1.143,1.143,0,0,0,1.143,1.143H4.286V30.286a1.143,1.143,0,0,0,1.143,1.143H30.571a1.143,1.143,0,0,0,1.143-1.143V13.143h1.143A1.143,1.143,0,0,0,34,12V5.143A1.143,1.143,0,0,0,32.857,4ZM29.429,29.143H6.571v-16H29.429Zm2.286-18.286H4.286V6.286H31.714Z"
                                fill="#d5d6dc"
                            ></path>
                            <path
                                id="Path_40720"
                                data-name="Path 40720"
                                d="M13.143,16.286H20A1.143,1.143,0,0,0,20,14H13.143a1.143,1.143,0,0,0,0,2.286Z"
                                transform="translate(1.429 1.429)"
                                fill="#d5d6dc"
                            ></path>
                        </g>
                    </svg>
                </div>
            </section>
            <section>
                <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center gap-2">
                        <div className="min-h-[10px] min-w-[10px] bg-[#19c553] rounded-full"></div>
                        <p className="text-sm text-gray-800 font-semibold">
                            Top Customers
                        </p>
                    </div>
                    <p className="text-sm text-gray-800 font-semibold">231</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <div className="min-h-[10px] min-w-[10px] bg-[#007bff] rounded-full"></div>
                        <p className="text-sm text-gray-800 font-semibold">
                            Top Customers
                        </p>
                    </div>
                    <p className="text-sm text-gray-800 font-semibold">3</p>
                </div>
            </section>
        </main>
    );
};

export default TotalProducts;
