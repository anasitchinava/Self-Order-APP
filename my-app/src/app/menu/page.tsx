import React from 'react';
import Navigation from "@/components/nav/navigation";
import Footer from '@/components/nav/footer';

const Menu = () => {
    const menuData = {
        starters: [
            { name: 'Caprese Salad', price: 10 },
            { name: 'Garlic Bread', price: 8 },
            { name: 'Bruschetta', price: 9 },
        ],
        mainDishes: [
            { name: 'Spaghetti Carbonara', price: 18, ingredients: 'Pasta, Eggs, Pancetta, Parmesan Cheese' },
            { name: 'Grilled Salmon', price: 22, ingredients: 'Salmon Fillet, Lemon, Olive Oil, Garlic' },
            { name: 'Margherita Pizza', price: 16, ingredients: 'Tomato Sauce, Mozzarella Cheese, Basil' },
        ],
        desserts: [
            { name: 'Tiramisu', price: 8, ingredients: 'Coffee, Mascarpone Cheese, Ladyfingers' },
            { name: 'Chocolate Fondant', price: 10, ingredients: 'Chocolate, Butter, Eggs, Flour' },
            { name: 'Cheesecake', price: 7, ingredients: 'Cream Cheese, Sugar, Eggs, Graham Crackers' },
        ],
        nonAlcoholicDrinks: [
            { name: 'Lemonade', price: 5 },
            { name: 'Iced Tea', price: 4 },
            { name: 'Orange Juice', price: 6 },
        ],
        alcoholicDrinks: [
            { name: 'Margarita', price: 12 },
            { name: 'Old Fashioned', price: 10 },
            { name: 'Pinot Noir', price: 15 },
        ],
    };

    return (
        <div>
            <Navigation />
            <div className="bg-pink-100 text-black">
                <div className="container mx-auto py-8 text-center">
                    <h1 className="text-3xl font-bold mb-4 inline-block rounded-full bg-pink-200 py-2 px-4">
                        Menu
                    </h1>
                    <hr className="border-t border-white mb-10" />
                    
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Starters</h2>
                        <ul className="mb-4">
                            {menuData.starters.map((item, index) => (
                                <li key={index} className="mb-2 mx-5 flex justify-between">
                                    <span>{item.name} - ${item.price}</span>
                                    <button className="bg-red-50 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                                        Order
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Main Dishes</h2>
                        <ul className="mb-4">
                            {menuData.mainDishes.map((item, index) => (
                                <li key={index} className="mb-2 mx-5 flex justify-between">
                                    <span>{item.name} - ${item.price} ({item.ingredients})</span>
                                    <button className="bg-red-50 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                                        Order
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Desserts</h2>
                        <ul className="mb-4">
                            {menuData.desserts.map((item, index) => (
                                <li key={index} className="mb-2 mx-5 flex justify-between">
                                    <span>{item.name} - ${item.price} ({item.ingredients})</span>
                                    <button className="bg-red-50 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                                        Order
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Non-Alcoholic Drinks</h2>
                            <ul className="mb-4">
                                {menuData.nonAlcoholicDrinks.map((item, index) => (
                                    <li key={index} className="mb-2 mx-5 flex justify-between">
                                        <span>{item.name} - ${item.price}</span>
                                        <button className="bg-red-50 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                                            Order
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Alcoholic Drinks</h2>
                            <ul className="mb-4">
                                {menuData.alcoholicDrinks.map((item, index) => (
                                    <li key={index} className="mb-2 mx-5 flex justify-between">
                                        <span>{item.name} - ${item.price}</span>
                                        <button className="bg-red-50 hover:bg-pink-200 text-black font-bold py-2 px-4 rounded">
                                            Order
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;