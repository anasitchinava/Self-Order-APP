import React from 'react';
import BannerImage from '@/assets/bannerImage';

const Banner = () => {
    return (
        <div className="bg-pink-100 py-8 px-4">
            <div className="container mx-auto max-w-screen-xl">
                <div className="flex justify-center items-center">
                    <div className="w-1/2 p-10">
                        <div className="text-gray-800">Empower Yourself: Self-Order, Save Time, and Enjoy Contactless Service</div>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <BannerImage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;