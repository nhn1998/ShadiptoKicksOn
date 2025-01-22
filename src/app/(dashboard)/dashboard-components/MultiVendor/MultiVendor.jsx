import Image from "next/image";

const MultiVendor = () => {
    return (
        <main className="border rounded-lg bg-white w-full p-8 flex justify-center items-center shadow-md">
            <section>
                <Image src="https://doubleboriginal.com/public/assets/img/multivendor.jpg" width={100} height={100} alt="picture" className="w-full object-cover"/>
                <p className="text-sm cursor-pointer text-violet-600 text-center mt-7 font-semibold">
                Activate Vendor System
                </p>
            </section>
        </main>
    );
};

export default MultiVendor;
