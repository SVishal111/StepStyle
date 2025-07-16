// Shoe data
const shoesData = {
    1: {
        name: "Classic Sneakers",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Our Classic Sneakers are the perfect blend of comfort and style. Crafted with premium materials and designed for everyday wear, these sneakers feature a breathable upper, cushioned sole, and timeless design that complements any outfit.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Premium leather upper</li>
                <li>Cushioned insole for comfort</li>
                <li>Durable rubber outsole</li>
                <li>Breathable design</li>
                <li>Available in multiple colors</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Clean with a soft brush and mild soap. Air dry away from direct heat. Store in a cool, dry place.</p>
        `
    },
    2: {
        name: "Premium Boots",
        price: "$149.99",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Step into luxury with our Premium Boots. These handcrafted boots combine rugged durability with sophisticated style, making them perfect for both outdoor adventures and urban exploration.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Full-grain leather construction</li>
                <li>Waterproof membrane</li>
                <li>Vibram rubber sole</li>
                <li>Padded collar and tongue</li>
                <li>Reinforced toe cap</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Apply leather conditioner regularly. Clean with leather cleaner and brush. Waterproof as needed.</p>
        `
    },
    3: {
        name: "Casual Loafers",
        price: "$119.99",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Effortlessly stylish and supremely comfortable, our Casual Loafers are the perfect choice for those who appreciate both form and function. The slip-on design makes them incredibly convenient for daily wear.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Soft suede upper</li>
                <li>Memory foam insole</li>
                <li>Flexible construction</li>
                <li>Slip-on design</li>
                <li>Lightweight and breathable</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Use suede brush to remove dirt. Apply suede protector spray. Store with shoe trees to maintain shape.</p>
        `
    },
    4: {
        name: "Running Shoes",
        price: "$129.99",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Engineered for performance and comfort, our Running Shoes feature advanced cushioning technology and breathable materials to support your active lifestyle. Perfect for both training and casual wear.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Responsive foam midsole</li>
                <li>Breathable mesh upper</li>
                <li>Carbon fiber plate</li>
                <li>Reflective details</li>
                <li>Lightweight construction</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Machine wash on gentle cycle. Air dry. Replace every 300-500 miles for optimal performance.</p>
        `
    },
    5: {
        name: "Formal Oxfords",
        price: "$179.99",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Timeless elegance meets modern comfort in our Formal Oxfords. These classic shoes are perfect for business meetings, formal events, and any occasion that demands sophistication and style.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Premium calfskin leather</li>
                <li>Goodyear welted construction</li>
                <li>Leather sole with rubber heel</li>
                <li>Padded insole</li>
                <li>Classic oxford styling</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Polish regularly with matching color polish. Use shoe trees to maintain shape. Rotate with other shoes.</p>
        `
    },
    6: {
        name: "Canvas Sneakers",
        price: "$69.99",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Simple, comfortable, and versatile - our Canvas Sneakers are the perfect everyday shoe. The lightweight canvas upper and rubber sole provide all-day comfort for casual activities.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Durable canvas upper</li>
                <li>Vulcanized rubber sole</li>
                <li>Reinforced toe cap</li>
                <li>Classic lace-up design</li>
                <li>Multiple color options</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Machine wash in cold water. Air dry. Spot clean as needed.</p>
        `
    },
    7: {
        name: "Leather Boots",
        price: "$199.99",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Built to last and designed to impress, our Leather Boots are crafted from the finest materials and constructed with attention to every detail. These boots will become your go-to footwear for years to come.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Full-grain leather upper</li>
                <li>Goodyear welt construction</li>
                <li>Leather lining</li>
                <li>Cork footbed</li>
                <li>Vibram lug sole</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Condition leather regularly. Clean with saddle soap. Apply waterproofing treatment.</p>
        `
    },
    8: {
        name: "Slip-on Mules",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        description: `
            <p>Effortless style meets ultimate comfort in our Slip-on Mules. Perfect for quick errands, casual outings, or lounging at home, these shoes provide the convenience you need without sacrificing style.</p>
            
            <h3>Features:</h3>
            <ul>
                <li>Soft leather upper</li>
                <li>Memory foam footbed</li>
                <li>Slip-on design</li>
                <li>Flexible sole</li>
                <li>Easy to wear</li>
            </ul>
            
            <h3>Care Instructions:</h3>
            <p>Wipe with damp cloth. Air dry. Apply leather conditioner as needed.</p>
        `
    }
};

// Get shoe ID from URL parameters
function getShoeId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Update page content based on shoe ID
function updateShoeDetail() {
    const shoeId = getShoeId();
    const shoe = shoesData[shoeId] || shoesData[1];
    
    // Update page title
    document.title = `${shoe.name} - StepStyle`;
    
    // Update content
    document.getElementById('shoeName').textContent = shoe.name;
    document.getElementById('shoePrice').textContent = shoe.price;
    document.getElementById('shoeImage').src = shoe.image;
    document.getElementById('shoeImage').alt = shoe.name;
    document.getElementById('shoeDescription').innerHTML = shoe.description;
}

// Initialize page
document.addEventListener('DOMContentLoaded', updateShoeDetail); 