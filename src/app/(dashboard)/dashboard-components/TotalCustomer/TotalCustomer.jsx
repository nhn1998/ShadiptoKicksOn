import { Images } from "lucide-react";

const TotalCustomer = () => {
    return (
        <main className="border rounded-lg bg-white w-full h-[220px] p-8 flex flex-col justify-between shadow-md">
            <section className="flex items-center justify-between">
                <div>
                    <p className="text-3xl text-gray-800 font-semibold">65</p>
                    <p className="text-sm text-gray-400 font-semibold">
                        Total Customer
                    </p>
                </div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                    >
                        <path
                            id="Path_41567"
                            data-name="Path 41567"
                            d="M21,13.75a1.25,1.25,0,0,0,2.5,0,7.508,7.508,0,0,0-4.068-6.667,4.375,4.375,0,1,0-6.865,0A7.508,7.508,0,0,0,8.5,13.75a1.25,1.25,0,0,0,2.5,0,5,5,0,0,1,10,0ZM14.125,4.375A1.875,1.875,0,1,1,16,6.25,1.877,1.877,0,0,1,14.125,4.375ZM10.932,24.083a4.375,4.375,0,1,0-6.865,0A7.508,7.508,0,0,0,0,30.75a1.25,1.25,0,0,0,2.5,0,5,5,0,0,1,10,0,1.25,1.25,0,0,0,2.5,0A7.508,7.508,0,0,0,10.932,24.083ZM5.625,21.375A1.875,1.875,0,1,1,7.5,23.25,1.877,1.877,0,0,1,5.625,21.375Zm22.307,2.708a4.375,4.375,0,1,0-6.865,0A7.508,7.508,0,0,0,17,30.75a1.25,1.25,0,0,0,2.5,0,5,5,0,0,1,10,0,1.25,1.25,0,0,0,2.5,0A7.508,7.508,0,0,0,27.932,24.083Zm-5.307-2.708A1.875,1.875,0,1,1,24.5,23.25,1.877,1.877,0,0,1,22.625,21.375Zm0,0"
                            fill="#d5d6db"
                        ></path>
                    </svg>
                </div>
            </section>
            <section>
                <div className="flex items-center gap-2">
                    <div className="min-h-[10px] min-w-[10px] bg-[#f0416c] rounded-full"></div>
                    <p className="text-sm text-gray-800 font-semibold">
                        Top Customers
                    </p>
                </div>
                <div className="flex items-center ml-2 mt-2">
                    <div className="min-w-[40px] text-gray-400  hover:z-20 duration-1000 cursor-pointer min-h-[40px] bg-[#DDDDDD] flex justify-center items-center rounded-full border border-white shadow-md">
                        <Images size={20}/>
                    </div>
                    <div className="min-w-[40px] text-gray-400 -ml-3 hover:z-20 duration-1000 cursor-pointer min-h-[40px] bg-[#DDDDDD] flex justify-center items-center rounded-full border border-white shadow-md">
                        <Images size={20}/>
                    </div>
                    <div className="min-w-[40px] text-gray-400 -ml-3 hover:z-20 duration-1000 cursor-pointer min-h-[40px] bg-[#DDDDDD] flex justify-center items-center rounded-full border border-white shadow-md">
                        <Images size={20}/>
                    </div>
                    <div className="min-w-[40px] text-gray-400 -ml-3 hover:z-20 duration-1000 cursor-pointer min-h-[40px] bg-[#DDDDDD] flex justify-center items-center rounded-full border border-white shadow-md">
                        <Images size={20}/>
                    </div>
                    <div className="min-w-[40px] text-gray-400 -ml-3 hover:z-20 duration-1000 cursor-pointer min-h-[40px] bg-[#DDDDDD] flex justify-center items-center rounded-full border border-white shadow-md">
                        <Images size={20}/>
                    </div>
                    <div className="min-w-[40px] text-gray-400 -ml-3 hover:z-20 duration-1000 cursor-pointer min-h-[40px] bg-[#DDDDDD] flex justify-center items-center rounded-full border border-white shadow-md">
                        <Images size={20}/>
                    </div>
                    
                </div>
            </section>
        </main>
    );
};

export default TotalCustomer;
