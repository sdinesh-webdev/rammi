import React from 'react';
import '../index.css'; // Ensure your styles are imported

const Menu = () => {
    const foodItems = [
        {
            id: 1,
            image: 'https://as1.ftcdn.net/v2/jpg/07/80/90/30/1000_F_780903003_EGsP2vubsUijCmKaQRPIsBAcuzbgjKHx.jpg',
            title: 'Delicious Pizza',
            description: 'A tasty pizza with fresh ingredients.',
        },
        {
            id: 2,
            image: 'https://as2.ftcdn.net/v2/jpg/06/19/33/25/1000_F_619332575_3In7ijEugwLEAW14GOPGCNSwpXV11lmA.jpg',
            title: 'Grilled Chicken',
            description: 'Juicy grilled chicken with herbs.',
        },
        {
            id: 3,
            image: 'https://as2.ftcdn.net/v2/jpg/06/19/33/25/1000_F_619332575_3In7ijEugwLEAW14GOPGCNSwpXV11lmA.jpg',
            title: 'Beef Burger',
            description: 'A juicy beef burger with a side of fries.',
        },
        {
            id: 4,
            image: 'https://as2.ftcdn.net/v2/jpg/06/19/33/25/1000_F_619332575_3In7ijEugwLEAW14GOPGCNSwpXV11lmA.jpg',
            title: 'Vegetable Salad',
            description: 'A healthy salad with a variety of vegetables.',
        },
        {
            id: 5,
            image: 'https://as2.ftcdn.net/v2/jpg/06/19/33/25/1000_F_619332575_3In7ijEugwLEAW14GOPGCNSwpXV11lmA.jpg',
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian dish with creamy sauce and pasta.',
        },
        {
            id: 6,
            image: 'https://as2.ftcdn.net/v2/jpg/06/19/33/25/1000_F_619332575_3In7ijEugwLEAW14GOPGCNSwpXV11lmA.jpg',
            title: 'Sushi Platter',
            description: 'Assorted sushi with fresh ingredients.',
        },
            
        // Add more food items as needed
    ];

    return (
        <div>
            <h1 className='py-10 text-4xl font-bold text-center'>Our Menu</h1>
            <ul className='flex justify-center items-center space-x-8'>
                <li className='list-none px-4 py-2 text-xl font-medium bg-gray-300 hover:bg-gray-400 rounded cursor-pointer'>All</li>
                <li className='list-none px-4 py-2 text-xl font-medium bg-gray-300 hover:bg-gray-400 rounded cursor-pointer'>Burger</li>
                <li className='list-none px-4 py-2 text-xl font-medium bg-gray-300 hover:bg-gray-400 rounded cursor-pointer'>Chicken</li>
                <li className='list-none px-4 py-2 text-xl font-medium bg-gray-300 hover:bg-gray-400 rounded cursor-pointer'>Meat</li>
                <li className='list-none px-4 py-2 text-xl font-medium bg-gray-300 hover:bg-gray-400 rounded cursor-pointer'>Pizza</li>
            </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-4">
            {foodItems.map(item => (
                <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Order Now</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Menu;