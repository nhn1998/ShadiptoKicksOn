import MultiVendor from "../dashboard-components/MultiVendor/MultiVendor";
import OrderStat from "../dashboard-components/OrderStat/OrderStat";
import SaleStat from "../dashboard-components/SaleStat/SaleStat";
import TopBrands from "../dashboard-components/TopBrands/TopBrands";
import TopCategory from "../dashboard-components/TopCategory/TopCategory";
import TotalBrands from "../dashboard-components/TotalBrands/TotalBrands";
import TotalCategory from "../dashboard-components/TotalCategory/TotalCategory";
import TotalCustomer from "../dashboard-components/TotalCustomer/TotalCustomer";
import TotalProducts from "../dashboard-components/TotalProducts/TotalProducts";
import TotalSales from "../dashboard-components/TotalSales/TotalSales";

export default function Home() {
    return (
        <main className="px-6 mt-5">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TotalCustomer />
                    <TotalProducts />
                    <TotalCategory />
                    <TotalBrands />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TotalSales />
                    <MultiVendor />
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <div className="grid grid-cols-1 gap-6">
                    <OrderStat/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TopCategory />
                    <TopBrands />
                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <div className="grid grid-cols-1 gap-6">
                    <SaleStat/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                </div>
            </section>
            
        </main>
    );
}
