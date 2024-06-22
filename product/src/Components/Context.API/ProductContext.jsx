import React, { createContext, useState } from 'react';

// Create a new context object
export const ProductContext = createContext();

// Define the ProductContextProvider component
export const ProductProvider = ({ children }) => {
    // State to hold the list of products
    const [productList, setProductList] = useState([]);

    // Function to add a product to the productList state
    const productAdd = (product) => {
        setProductList([...productList, product]);
    };

    return (
        <div>
            {/* Use ProductContext.Provider to provide values to consuming components */}
            <ProductContext.Provider value={{ productList, productAdd }}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};
