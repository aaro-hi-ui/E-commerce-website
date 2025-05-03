// Mock categories data
export const mockCategories = [
    {
        id: 'fashion',
        name: 'Fashion',
        count: 1250,
        image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'electronics',
        name: 'Electronics',
        count: 850,
        image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id: 'home',
        name: 'Home Goods',
        count: 920,
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
];

// Mock products data
export const mockProducts = [
    {
        id: 'p1',
        name: 'Wireless Bluetooth Headphones',
        brand: 'SoundWave',
        price: 129.99,
        discount: 15,
        rating: 4.5,
        reviews: 128,
        image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'electronics',
        isNew: true,
        description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design.',
        stock: 25
    },
    {
        id: 'p2',
        name: 'Smart Fitness Watch',
        brand: 'TechFit',
        price: 89.99,
        discount: 0,
        rating: 4,
        reviews: 75,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'electronics',
        isNew: true,
        description: 'Track your fitness goals with this water-resistant smart watch featuring heart rate monitoring, GPS, and smartphone notifications.',
        stock: 18
    },
    {
        id: 'p3',
        name: 'Premium Denim Jacket',
        brand: 'UrbanStyle',
        price: 79.99,
        discount: 0,
        rating: 4.5,
        reviews: 42,
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'fashion',
        isNew: true,
        description: 'Classic denim jacket with a modern fit, perfect for casual everyday wear. Made from high-quality denim that gets better with age.',
        stock: 30
    },
    {
        id: 'p4',
        name: 'Ceramic Coffee Mug Set',
        brand: 'HomeComfort',
        price: 34.99,
        discount: 10,
        rating: 5,
        reviews: 63,
        image: 'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'home',
        isNew: false,
        description: 'Set of 4 ceramic coffee mugs in assorted colors. Microwave and dishwasher safe with 12oz capacity.',
        stock: 45
    },
    {
        id: 'p5',
        name: 'Ultra HD Smart TV',
        brand: 'VisionTech',
        price: 599.99,
        discount: 20,
        rating: 4.5,
        reviews: 87,
        image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'electronics',
        isNew: false,
        description: '55-inch 4K Ultra HD Smart TV with built-in streaming apps, voice control, and stunning picture quality.',
        stock: 12
    },
    {
        id: 'p6',
        name: 'Summer Floral Dress',
        brand: 'ChicBoutique',
        price: 49.99,
        discount: 15,
        rating: 4,
        reviews: 38,
        image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'fashion',
        isNew: true,
        description: 'Lightweight floral print dress perfect for summer days. Features adjustable straps and a flowy skirt.',
        stock: 28
    },
    {
        id: 'p7',
        name: 'Modern Desk Lamp',
        brand: 'LightCraft',
        price: 45.99,
        discount: 0,
        rating: 4.5,
        reviews: 52,
        image: 'https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'home',
        isNew: false,
        description: 'Adjustable desk lamp with 3 color temperatures and 5 brightness levels. Features USB charging port and touch controls.',
        stock: 35
    },
    {
        id: 'p8',
        name: 'Portable Bluetooth Speaker',
        brand: 'SoundWave',
        price: 69.99,
        discount: 10,
        rating: 4,
        reviews: 94,
        image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'electronics',
        isNew: true,
        description: 'Waterproof portable speaker with 20-hour battery life, deep bass, and 360-degree sound. Perfect for outdoor activities.',
        stock: 22
    },
    {
        id: 'p9',
        name: 'Leather Wallet',
        brand: 'UrbanStyle',
        price: 29.99,
        discount: 0,
        rating: 5,
        reviews: 71,
        image: 'https://images.pexels.com/photos/946187/pexels-photo-946187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'fashion',
        isNew: false,
        description: 'Genuine leather bifold wallet with RFID blocking technology, multiple card slots, and bill compartment.',
        stock: 50
    },
    {
        id: 'p10',
        name: 'Scented Candle Set',
        brand: 'HomeComfort',
        price: 24.99,
        discount: 5,
        rating: 4.5,
        reviews: 48,
        image: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'home',
        isNew: false,
        description: 'Set of 3 scented candles in decorative glass jars. Fragrances include vanilla, lavender, and sea breeze.',
        stock: 40
    },
    {
        id: 'p11',
        name: 'Wireless Gaming Mouse',
        brand: 'TechGear',
        price: 59.99,
        discount: 0,
        rating: 4,
        reviews: 82,
        image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'electronics',
        isNew: true,
        description: 'High-precision wireless gaming mouse with RGB lighting, programmable buttons, and long battery life.',
        stock: 15
    },
    {
        id: 'p12',
        name: 'Casual Sneakers',
        brand: 'StrideRight',
        price: 64.99,
        discount: 10,
        rating: 4.5,
        reviews: 59,
        image: 'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'fashion',
        isNew: false,
        description: 'Lightweight and comfortable casual sneakers with memory foam insoles and breathable upper material.',
        stock: 32
    }
];