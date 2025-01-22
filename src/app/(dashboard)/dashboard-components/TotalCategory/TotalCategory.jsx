const TotalCategory = () => {
    return (
        <main className="border rounded-lg bg-white w-full h-[220px] p-8 flex flex-col justify-between shadow-md">
            <section className="flex items-center justify-between">
                <div>
                    <p className="text-3xl text-gray-800 font-semibold">5</p>
                    <p className="text-sm text-gray-400 font-semibold">
                    Total Category
                    </p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path id="_137b5e1009c61a91dc419a2998502736" data-name="137b5e1009c61a91dc419a2998502736" d="M27.144,17.266A4.922,4.922,0,0,1,32,22.207h0v4.836A4.937,4.937,0,0,1,27.144,32H22.407a4.922,4.922,0,0,1-4.841-4.957h0V22.207a4.892,4.892,0,0,1,4.841-4.942h4.737Zm-20.343,0a1.3,1.3,0,0,1,1.247.619,1.358,1.358,0,0,1,0,1.415,1.3,1.3,0,0,1-1.247.619H4.856A2.281,2.281,0,0,0,2.6,22.208h0v4.775a2.326,2.326,0,0,0,2.257,2.289H9.622a2.219,2.219,0,0,0,1.6-.665,2.313,2.313,0,0,0,.662-1.624h0v-7.17l-.02-.178a1.342,1.342,0,0,1,.606-1.19,1.285,1.285,0,0,1,1.462.043,1.348,1.348,0,0,1,.506,1.4h0v7.14a4.907,4.907,0,0,1-4.856,4.957H4.856A5.012,5.012,0,0,1,0,27.028H0v-4.82a4.994,4.994,0,0,1,1.423-3.5,4.791,4.791,0,0,1,3.433-1.442H6.8Zm20.343,2.653H22.407a2.266,2.266,0,0,0-2.242,2.289h0v4.836a2.3,2.3,0,0,0,.652,1.623,2.2,2.2,0,0,0,1.59.666h4.737a2.2,2.2,0,0,0,1.59-.666,2.3,2.3,0,0,0,.652-1.623h0V22.207a2.313,2.313,0,0,0-.657-1.619,2.219,2.219,0,0,0-1.585-.67ZM27.144,0a5.013,5.013,0,0,1,4.841,4.957h0v4.82a5,5,0,0,1-1.376,3.512A4.794,4.794,0,0,1,27.2,14.78h-1.96a1.337,1.337,0,0,1,0-2.653h1.9a2.235,2.235,0,0,0,1.6-.691,2.33,2.33,0,0,0,.645-1.644h0V4.957a2.3,2.3,0,0,0-2.242-2.289H22.407a2.266,2.266,0,0,0-2.242,2.289h0v7.231l-.015.166a1.33,1.33,0,0,1-1.321,1.137,1.28,1.28,0,0,1-.91-.413,1.335,1.335,0,0,1-.352-.951h0V4.957a5,5,0,0,1,1.413-3.5A4.791,4.791,0,0,1,22.407,0h4.737ZM9.593,0a4.922,4.922,0,0,1,4.856,4.957h0V9.793a4.994,4.994,0,0,1-1.423,3.5,4.791,4.791,0,0,1-3.433,1.442H4.856A4.922,4.922,0,0,1,0,9.793H0V4.957A4.937,4.937,0,0,1,4.856,0H9.593Zm0,2.668H4.856a2.218,2.218,0,0,0-1.614.654,2.313,2.313,0,0,0-.672,1.635h0V9.793a2.314,2.314,0,0,0,.656,1.664,2.218,2.218,0,0,0,1.63.67H9.593a2.235,2.235,0,0,0,1.6-.691,2.33,2.33,0,0,0,.645-1.644h0V4.957A2.281,2.281,0,0,0,9.593,2.668Z" fill="#d5d6dc"></path>
                                        </svg>
                </div>
            </section>
            <section>
                <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center gap-2">
                        <div className="min-h-[6px] min-w-[25px] bg-pink-400 rounded-full"></div>
                        <p className="text-sm text-gray-400 font-semibold">
                        SNEAKER
                        </p>
                    </div>
                    <p className="text-sm text-gray-800 font-semibold">৳27,200.00</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <div className="min-h-[6px] min-w-[25px] bg-yellow-300 rounded-full"></div>
                        <p className="text-sm text-gray-400 font-semibold">
                        PANTS
                        </p>
                    </div>
                    <p className="text-sm text-gray-800 font-semibold">৳13,000.00</p>
                </div>
            </section>
        </main>
    );
};

export default TotalCategory;