import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            icon: "https://cdn4.iconfinder.com/data/icons/food-characters/416/Food_Characters-04-512.png",
            description: "Convenience: Order anytime, anywhere, and avoid long queues."
        },
        {
            id: 2,
            icon: "https://img.freepik.com/premium-vector/cute-pink-glass-wine-cartoon-flat-icon-glamour-beverage_538002-3117.jpg",
            description: "Customization: Easily customize your order to suit your preferences."
        },
        {
            id: 3,
            icon: "data:image/jpeg;base64,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IrZx0SbXIO+N57Mk9s3+i+TbNvvs3fq6cqvc1nnHw2ZHnwy1dXDDy1Gh1gHoaE2mHEA/BUnftW2HgTx35Y8jOk1TqYVHpHO3dgjaxhKweK1r1dp4nu3DY6LoyVKERVVRwVQAPZJZaYvP1de59p2hERLsCIiAiIgIiICIiAiIgIiICIiAiIgJpvKLTXXoqkOybRYzOMbS1ps5C54MS439QDTcyrrDQEvUK4O47SspKujcNpWHA4JHaCRIvjsthZMpb4culAVdlRjfk8SSTxJJ3knmd8is0UNuYKRyYAj2za2aiuXzLkcdQtr2WPe6HH7sgbV+kjjUjfs7gfxqsp/h6WPUYfFa33sr6hj5pZPwmeBoA+X9rb/qmxNGkD/61vg+in/MmOhv/wC2u+to39WRtPS/1sfcUBq5DxXPzmZh7SZLXoip5iqPmgLLY0fSP+2s8bNG/KwyQaBpR4VKPn3AfhVo7ei6+E+YrGkFSrAEHcwIyCOWJsfJ/S3W3oGYshrayssSzoFZVKFuLD4YxnfuO87sea9SXt51laDrCI1jeDMQP3TNrqzVaUbRG0ztjbscguwHAbgABvO4ADfJku7l19bDLHad6vRETRxEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z",
            description: "Speed: Get your order faster with self-ordering kiosks or mobile apps."
        }
    ];

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-black">Benefits of Using Self-Order</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="max-w-sm w-full md:w-1/2 lg:w-1/4 mx-4 my-4 border border-gray-300 rounded-lg p-4 flex flex-col items-center">
                        <img src={testimonial.icon} alt="icon" className="h-16 w-16 mb-4" />
                        <p className="text-center text-black">{testimonial.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;