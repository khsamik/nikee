const products = [
    {
      id: 1,
      title: "Wireless Mouse",
      price: 25,
      category: "Electronics",
      stock: 120,
      rating: 4.5,
      brand: "Logitech",
      isAvailable: true,
      image: "https://picsum.photos/id/101/300/300"
    },
    {
      id: 2,
      title: "Mechanical Keyboard",
      price: 85,
      category: "Electronics",
      stock: 60,
      rating: 4.8,
      brand: "Redragon",
      isAvailable: true,
      image: "https://picsum.photos/id/102/300/300"
    },
    {
      id: 3,
      title: "Gaming Headset",
      price: 70,
      category: "Electronics",
      stock: 45,
      rating: 4.6,
      brand: "HyperX",
      isAvailable: true,
      image: "https://picsum.photos/id/103/300/300"
    },
    {
      id: 4,
      title: "USB-C Cable",
      price: 10,
      category: "Accessories",
      stock: 300,
      rating: 4.3,
      brand: "Baseus",
      isAvailable: true,
      image: "https://picsum.photos/id/104/300/300"
    },
    {
      id: 6,
      title: "Smart Watch",
      price: 120,
      category: "Electronics",
      stock: 35,
      rating: 4.4,
      brand: "Samsung",
      isAvailable: true,
      image: "https://picsum.photos/id/106/300/300"
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      price: 55,
      category: "Electronics",
      stock: 90,
      rating: 4.6,
      brand: "JBL",
      isAvailable: true,
      image: "https://picsum.photos/id/107/300/300"
    },
    {
      id: 8,
      title: "Laptop Stand",
      price: 30,
      category: "Accessories",
      stock: 150,
      rating: 4.2,
      brand: "Ugreen",
      isAvailable: true,
      image: "https://picsum.photos/id/108/300/300"
    },
    {
      id: 9,
      title: "Webcam HD",
      price: 50,
      category: "Electronics",
      stock: 40,
      rating: 4.1,
      brand: "A4Tech",
      isAvailable: true,
      image: "https://picsum.photos/id/109/300/300"
    },
    {
      id: 10,
      title: "Monitor 24 inch",
      price: 180,
      category: "Electronics",
      stock: 25,
      rating: 4.7,
      brand: "LG",
      isAvailable: true,
      image: "https://picsum.photos/id/110/300/300"
    },
  
    {
      id: 11,
      title: "Office Chair",
      price: 210,
      category: "Furniture",
      stock: 15,
      rating: 4.5,
      brand: "IKEA",
      isAvailable: true,
      image: "https://picsum.photos/id/111/300/300"
    },
    {
      id: 12,
      title: "Desk Lamp",
      price: 35,
      category: "Furniture",
      stock: 70,
      rating: 4.3,
      brand: "Philips",
      isAvailable: true,
      image: "https://picsum.photos/id/112/300/300"
    },
    {
      id: 13,
      title: "Backpack",
      price: 65,
      category: "Fashion",
      stock: 50,
      rating: 4.4,
      brand: "Nike",
      isAvailable: true,
      image: "https://picsum.photos/id/113/300/300"
    },
    {
      id: 14,
      title: "Sneakers",
      price: 95,
      category: "Fashion",
      stock: 40,
      rating: 4.6,
      brand: "Adidas",
      isAvailable: true,
      image: "https://picsum.photos/id/114/300/300"
    },
    {
      id: 15,
      title: "T-Shirt",
      price: 20,
      category: "Fashion",
      stock: 200,
      rating: 4.2,
      brand: "Puma",
      isAvailable: true,
      image: "https://picsum.photos/id/115/300/300"
    },
  
    {
      id: 16,
      title: "Jeans",
      price: 50,
      category: "Fashion",
      stock: 90,
      rating: 4.3,
      brand: "Levis",
      isAvailable: true,
      image: "https://picsum.photos/id/116/300/300"
    },
    {
      id: 17,
      title: "Coffee Maker",
      price: 110,
      category: "Home",
      stock: 30,
      rating: 4.5,
      brand: "Bosch",
      isAvailable: true,
      image: "https://picsum.photos/id/117/300/300"
    },
    {
      id: 18,
      title: "Electric Kettle",
      price: 45,
      category: "Home",
      stock: 65,
      rating: 4.4,
      brand: "Tefal",
      isAvailable: true,
      image: "https://picsum.photos/id/118/300/300"
    },
    {
      id: 19,
      title: "Blender",
      price: 75,
      category: "Home",
      stock: 40,
      rating: 4.1,
      brand: "Philips",
      isAvailable: true,
      image: "https://picsum.photos/id/119/300/300"
    },
    {
      id: 20,
      title: "Microwave Oven",
      price: 160,
      category: "Home",
      stock: 20,
      rating: 4.6,
      brand: "Samsung",
      isAvailable: true,
      image: "https://picsum.photos/id/120/300/300"
    },
];
  
let productContainer = document.querySelector('.basket')
let productOrder = 0

let input = document.querySelector('.searchInput')
let resultsList = document.querySelector('.basket')

 input.addEventListener('input', () => {
    let searchValue = input.value.toLowerCase();
    let filteredItems = products.filter(item =>
        item.title.toLowerCase().includes(searchValue)
    )

    resultsList.innerHTML = '';

    filteredItems.forEach(item => {
        resultsList.insertAdjacentHTML('beforeend', `
            <div class="container-product">
            <img src="${item.image}" alt="">
            </div>
            `)
    })
 })

while(products.length > productOrder) {
    productOrder++
    productContainer.insertAdjacentHTML('beforeend', 
        `
        <div class="container-product"> 
            <img src="${products[productOrder].image}" alt="">
            <div>
                <h4>${products[productOrder].title}</h4>
                <p>${products[productOrder].price}$</p>
            </div>
            <div>
                <p>${products[productOrder].brand}</p>
                <p>${products[productOrder].category}</p>
            </div>
        </div>
        `
    )
}