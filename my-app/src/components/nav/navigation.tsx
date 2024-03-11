import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-white border border-gray-300 rounded-lg px-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://i.pinimg.com/originals/29/63/73/2963735e3344a16ded8ced4367307b41.jpg" alt="Logo" className="rounded-full w-[100px] h-[100px]" />
                    <div className="text-gray-800 font-bold text-lg">Self-Order</div>
                </div>
                <div className="flex space-x-10">
                    <a href="/" className="text-gray-800 hover:text-shadowed">Home</a>
                    <Link href="/menu">
                        <span className="text-gray-800 hover:text-shadowed cursor-pointer">Menu</span>
                    </Link>
                    <a href="/cart" className="text-gray-800 hover:text-shadowed">Food Cart</a>
                    <a href="#footer" className="text-gray-800 hover:text-shadowed">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;