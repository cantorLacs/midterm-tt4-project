import './index.scss';

// images
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";
import img8 from "./assets/images/img8.jpg";
import img9 from "./assets/images/img9.jpg";
import img10 from "./assets/images/img10.jpg";
import img11 from "./assets/images/img11.jpg";
import img12 from "./assets/images/img12.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'poduct 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img1,
            price: '$10.00'
        },
        {
            name: 'poduct 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img2,
            price: '$10.00'
            
        },
        {
            name: 'poduct 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img3,
            price: '$10.00'
        },
        {
            name: 'poduct 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img4,
            price: '$10.00'
        },
        {
            name: 'poduct 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img5,
            price: '$10.00'
        },
        {
            name: 'poduct 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img6,
            price: '$10.00'
        },
        {
            name: 'poduct 7',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img7,
            price: '$10.00'
        },
        {
            name: 'poduct 8',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img8,
            price: '$10.00'
        },
        {
            name: 'poduct 9',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img9,
            price: '$10.00'
        },
        {
            name: 'poduct 10',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img10,
            price: '$10.00'
        },
        {
            name: 'poduct 11',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img11,
            price: '$10.00'
        },
        {
            name: 'poduct 12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img12,
            price: '$10.00'
        }
    ];

    products.forEach(product => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4'); // Para pantallas medianas y grandes
    
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'
    
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;
    
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;
    
        const addToCart = document.createElement('button');
        addToCart.classList.add('btn', 'btn-success', 'float-end');
        addToCart.textContent = "Add to cart";
    
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv); 
    
        productsContainer.appendChild(colDiv);
    });
});