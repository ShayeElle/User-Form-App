App.js file:
import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product 
    title= "Product 1" 
    price= "10"
    description= "First product"
    ></Product>
                <Product 
    title= "Product 2" 
    price= "20"
    description= "Second product"
    ></Product>
        </div>
    );
}

Product.js file:
import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">{props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}


//  We can make our components reusable by using parameters and a concept called props in React

// You want to choose prop names (attribute names) that are self-explanatory and makes sense 