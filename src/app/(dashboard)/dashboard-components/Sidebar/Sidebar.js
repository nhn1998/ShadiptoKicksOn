import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = ({sidebarOpen,setSidebarOpen}) => {
    return (
        <div className={`bg-[#232734] text-white`}>
            <div className='w-full bg-green-400 p-5 flex justify-center items-center'>
                <Link href="/admin"><Image src="https://doubleboriginal.com/public/uploads/all/1ImAeOHNq6iZHBf5KR7gsp1E1EQVdnQIWuNwXdck.png" width={100} height={100} alt='picture' className='h-[32px] w-full'/></Link>
            </div>
            <div>Product</div>
            <div>Product</div>
            <div>Product</div>
            <Link href="admin/all_orders">All order</Link>
        </div>
    );
};

export default Sidebar;