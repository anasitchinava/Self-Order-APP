import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="border-t py-4 bg-pink-100">
            <div className="container mx-auto flex flex-col items-center text-black">
                <p className="text-center text-sm mb-2">&copy; 2024 Self-Order. All rights reserved.</p>
                <p className="text-center text-sm mb-2">Email: info@selforder.com | Phone: (+995) 557 000 000</p>
                <p className="text-center text-sm">Address: 1 Kostava St, Tbilisi, Georgia</p>
            </div>
        </footer>
    );
}

export default Footer;