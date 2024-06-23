import React, { useContext } from 'react';
import { ProductContext } from '../Context.API/ProductContext.jsx';

const ProductView = () => {
    const { productList } = useContext(ProductContext);

    return (
        <div>
            <h1 className="mt-6 font-bold flex justify-center text-2xl underline">Product List</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Variant</th>
                        <th>Selling Date</th>
                        <th>TIN</th>
                        <th>Tax Amount</th>
                        <th>Total</th>
                        <th>Grand Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productList.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>
                                <img src={product.productImage} alt={product.name} className="w-16 h-16 object-cover"/>
                            </td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.variant}</td>
                            <td>{product.sellingDate}</td>
                            <td>{product.tinNumber}</td>
                            <td>{product.taxAmount}</td>
                            <td>{product.totalAmount}</td>
                            <td>{product.grandTotal}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductView;
