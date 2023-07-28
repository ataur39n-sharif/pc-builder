import type {NextApiRequest, NextApiResponse} from 'next'

const data = {
    "products": [
        {
            "id": 1,
            "category": "cpu",
            "product_name": "Intel Core i7-10700K",
            "price": 349.99,
            "status": "In Stock",
            "rating": 4.5,
            "image": "https://images.unsplash.com/photo-1555616635-96c8fef588c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 2,
            "category": "cpu",
            "product_name": "AMD Ryzen 9 5900X",
            "price": 499.99,
            "status": "In Stock",
            "rating": 4.8,
            "image": "https://images.unsplash.com/photo-1555616635-640b71bdb185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 3,
            "category": "cpu",
            "product_name": "Intel Core i5-11600K",
            "price": 259.99,
            "status": "In Stock",
            "rating": 4.3,
            "image": "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            "id": 4,
            "category": "cpu",
            "product_name": "AMD Ryzen 7 5800X",
            "price": 399.99,
            "status": "Out of Stock",
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1611275484976-52812441218a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id": 51,
            "category": "cpu",
            "product_name": "Intel Core i9-12900K",
            "price": 699.99,
            "status": "In Stock",
            "rating": 4.9,
            "image": "https://images.unsplash.com/photo-1629725413175-396025477a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id": 5,
            "category": "motherboard",
            "product_name": "ASUS ROG Strix Z590-E Gaming",
            "price": 299.99,
            "status": "In Stock",
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1629725413175-396025477a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id": 6,
            "category": "motherboard",
            "product_name": "MSI MPG B550 Gaming Edge WiFi",
            "price": 189.99,
            "status": "In Stock",
            "rating": 4.4,
            "image": "https://images.unsplash.com/photo-1589749807521-dd6bc0d4f75d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 7,
            "category": "motherboard",
            "product_name": "Gigabyte B450 AORUS Elite",
            "price": 129.99,
            "status": "Out of Stock",
            "rating": 4.2,
            "image": "https://images.unsplash.com/photo-1593687395549-400945fed803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        },
        {
            "id": 8,
            "category": "motherboard",
            "product_name": "ASRock B560M Pro4",
            "price": 139.99,
            "status": "In Stock",
            "rating": 4.0,
            "image": "https://images.unsplash.com/photo-1586920740099-f3ceb65bc51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
        },
        {
            "id": 9,
            "category": "motherboard",
            "product_name": "ASUS Prime X570-P",
            "price": 179.99,
            "status": "In Stock",
            "rating": 4.5,
            "image": "https://images.unsplash.com/photo-1620368523635-df9d83338fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id": 92,
            "category": "ram",
            "product_name": "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
            "price": 89.99,
            "status": "In Stock",
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1601046885687-b7bdf1306274?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 10,
            "category": "ram",
            "product_name": "G.SKILL Trident Z RGB Series 32GB (2x16GB) DDR4 3600MHz",
            "price": 179.99,
            "status": "In Stock",
            "rating": 4.8,
            "image": "https://images.unsplash.com/photo-1603827531753-0d72fb6a45e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 11,
            "category": "ram",
            "product_name": "Crucial Ballistix 8GB DDR4 2666MHz",
            "price": 49.99,
            "status": "Out of Stock",
            "rating": 4.0,
            "image": "https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            "id": 12,
            "category": "ram",
            "product_name": "Kingston HyperX Fury 16GB (2x8GB) DDR4 3000MHz",
            "price": 79.99,
            "status": "In Stock",
            "rating": 4.4,
            "image": "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
        },
        {
            "id": 13,
            "category": "ram",
            "product_name": "Patriot Viper Steel Series 64GB (2x32GB) DDR4 3200MHz",
            "price": 299.99,
            "status": "In Stock",
            "rating": 4.9,
            "image": "https://images.unsplash.com/photo-1666868213726-9c7ab504a56c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id": 14,
            "category": "power_supply",
            "product_name": "EVGA Supernova 750 G+",
            "price": 129.99,
            "status": "In Stock",
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1675954031909-ead493243be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            "id": 15,
            "category": "power_supply",
            "product_name": "Corsair RM850x",
            "price": 149.99,
            "status": "In Stock",
            "rating": 4.8,
            "image": "https://images.unsplash.com/photo-1675893857082-803b1a2bb6f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 16,
            "category": "power_supply",
            "product_name": "Seasonic Focus GM-750",
            "price": 119.99,
            "status": "Out of Stock",
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1675893857450-783969c8922f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 17,
            "category": "power_supply",
            "product_name": "Thermaltake Toughpower GF1 650W",
            "price": 99.99,
            "status": "In Stock",
            "rating": 4.3,
            "image": "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        },
        {
            "id": 18,
            "category": "power_supply",
            "product_name": "NZXT C750",
            "price": 139.99,
            "status": "In Stock",
            "rating": 4.5,
            "image": "https://images.unsplash.com/photo-1529961172671-d48e8280f846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1127&q=80"
        },
        {
            "id": 19,
            "category": "storage",
            "product_name": "Samsung 970 EVO Plus 1TB NVMe SSD",
            "price": 199.99,
            "status": "In Stock",
            "rating": 4.9,
            "image": "https://images.unsplash.com/photo-1661347561213-21aad3b49b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 20,
            "category": "storage",
            "product_name": "Western Digital Blue 2TB HDD",
            "price": 69.99,
            "status": "In Stock",
            "rating": 4.5,
            "image": "https://images.unsplash.com/photo-1661347561181-164994c18be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjBzc2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            "id": 21,
            "category": "storage",
            "product_name": "Seagate BarraCuda 4TB HDD",
            "price": 99,
            "status": "Out of Stock",
            "rating": 4.3,
            "image": "https://images.unsplash.com/photo-1661347560497-b8825f2ffb9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 22,
            "category": "storage",
            "product_name": "Crucial MX500 500GB SATA SSD",
            "price": 79.99,
            "status": "In Stock",
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1661347561181-148c03cb4554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        {
            "id": 23,
            "category": "storage",
            "product_name": "SanDisk Extreme Pro 256GB microSDXC",
            "price": 49.99,
            "status": "In Stock",
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1654946543532-554bd131d58c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id": 24,
            "category": "monitor",
            "product_name": "Dell S2719DGF 27-inch Gaming Monitor",
            "price": 349.99,
            "status": "In Stock",
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1426024120108-99cc76989c71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
        },
        {
            "id": 25,
            "category": "monitor",
            "product_name": "LG 34GN850-B 34-inch UltraGear Curved Gaming Monitor",
            "price": 899.99,
            "status": "In Stock",
            "rating": 4.9,
            "image": "https://images.unsplash.com/photo-1594400344473-cf8b48733c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1095&q=80"
        },
        {
            "id": 26,
            "category": "monitor",
            "product_name": "ASUS ProArt PA278QV 27-inch Professional Monitor",
            "price": 349.99,
            "status": "Out of Stock",
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1560131914-2e469a0e8607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            "id": 27,
            "category": "monitor",
            "product_name": "Acer R240HY 23.8-inch IPS Monitor",
            "price": 149.99,
            "status": "In Stock",
            "rating": 4.5,
            "image": "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        },
        {
            "id": 28,
            "category": "monitor",
            "product_name": "ViewSonic VX3276-MHD 32-inch Full HD Monitor",
            "price": 229.99,
            "status": "In Stock",
            "rating": 4.4,
            "image": "https://images.unsplash.com/photo-1611648694931-1aeda329f9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
        },
        {
            "id": 29,
            "category": "keyboard",
            "product_name": "Logitech G Pro Mechanical Gaming Keyboard",
            "price": 129.99,
            "status": "In Stock",
            "rating": 4.8,
            "image": "https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            "id": 30,
            "category": "keyboard",
            "product_name": "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard",
            "price": 199.99,
            "status": "In Stock",
            "rating": 4.9,
            "image": "https://images.unsplash.com/photo-1635987391914-cb84b567e68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        },
        {
            "id": 31,
            "category": "keyboard",
            "product_name": "Razer Huntsman Mini 60% Gaming Keyboard",
            "price": 119.99,
            "status": "Out of Stock",
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1612731427528-9980b4af1b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80"
        },
        {
            "id": 32,
            "category": "keyboard",
            "product_name": "SteelSeries Apex Pro TKL Mechanical Gaming Keyboard",
            "price": 169.99,
            "status": "In Stock",
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        },
        {
            "id": 33,
            "category": "keyboard",
            "product_name": "Microsoft Surface Ergonomic Keyboard",
            "price": 129.99,
            "status": "In Stock",
            "rating": 4.5,
            "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
        },
        {
            "id": 34,
            "category": "mouse",
            "product_name": "Logitech G Pro Wireless Gaming Mouse",
            "price": 149.99,
            "status": "In Stock",
            "rating": 4.8,
            "image": "https://images.unsplash.com/photo-1599581142115-e8ca8db95d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            "id": 35,
            "category": "mouse",
            "product_name": "Razer DeathAdder V2 Pro Wireless Gaming Mouse",
            "price": 129.99,
            "status": "In Stock",
            "rating": 4.7,
            "image": "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
        },
        {
            "category": "mouse",
            "product_name": "SteelSeries Rival 650 Wireless Gaming Mouse",
            "price": 109.99,
            "status": "Out of Stock",
            "rating": 4.6,
            "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
        },
        {
            "id": 36,
            "category": "mouse",
            "product_name": "Corsair Dark Core RGB Pro SE Wireless Gaming Mouse",
            "price": 89.99,
            "status": "In Stock",
            "rating": 4.4,
            "image": "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        },
        {
            "id": 37,
            "category": "mouse",
            "product_name": "Microsoft Surface Precision Mouse",
            "price": 89.99,
            "status": "In Stock",
            "rating": 4.3,
            "image": "https://images.unsplash.com/photo-1551515300-2d3b7bb80920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
        }
    ]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        res.status(200).json(data)
    } else {
        res.status(404).json({
            success: false
        })
    }

}
