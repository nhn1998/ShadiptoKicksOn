import React from 'react';

const Navbar = ({setSidebarOpen,sidebarOpen}) => {
    return (
        <div>
            <div  className="bg-red-800 text-white h-16 w-full">Navbar</div>
            <button onClick={()=>setSidebarOpen(!sidebarOpen)}>OPen</button>
        </div>
    );
};

export default Navbar;