import React, { useState, useContext } from 'react';
import { ProductContext } from './Context.API/ProductContext.jsx';

const Form = () => {
    const [showTaxTinFields, setShowTaxTinFields] = useState(false);
    const { productAdd } = useContext(ProductContext);
    const [product, setProduct] = useState({
        name: "",
        productImage: "",
        price: "",
        quantity: "",
        variant: "",
        sellingDate: "",
        tinNumber: "",
        taxAmount: "",
        totalAmount: "",
        grandTotal: "",
    });
    // console.log(product)

    const handleCheckbox = (event) => {
        setShowTaxTinFields(event.target.checked);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({...product, [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        productAdd(product);
        setProduct({
            name: "",
            productImage: "",
            price: "",
            quantity: "",
            variant: "",
            sellingDate: "",
            tinNumber: "",
            taxAmount: "",
            totalAmount: "",
            grandTotal: "",
        });
    };
    // console.log(handleSubmit)

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-end mt-8">
                <button className="btn btn-outline btn-accent">Add Product</button>
                <button className="btn btn-outline btn-accent mx-4">Show Report</button>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1>Product Report Generator</h1>
                </div>
                <div>
                    <h2>Product Details</h2>
                </div>

                <div className="flex space-x-4 mt-4">
                    <div className="flex flex-col items-start space-y-2">
                        <label className="font-semibold">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs required:border-red-500 border-emerald-400"
                        />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <label className="font-semibold">Product Image Url</label>
                        <input
                            type="img"
                            name="productImage"
                            value={product.productImage}
                            onChange={handleChange}
                            placeholder="Product image Url"
                            className="input input-bordered w-full max-w-xs required:border-red-500 border-emerald-400"
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mt-4">
                    <div className="flex flex-col items-start space-y-2">
                        <label className="font-semibold">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs required:border-red-500 border-emerald-400"
                        />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <label className="font-semibold">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={product.quantity}
                            onChange={handleChange}
                            placeholder="type here"
                            className="input input-bordered w-full max-w-xs required:border-red-500 border-emerald-400"
                        />
                    </div>
                </div>
                <div className="flex space-x-10 mt-4">
                    <div className="flex flex-col items-start space-y-2 w-48">
                        <label className="font-semibold">Variant</label>
                        <select
                            name="variant"
                            value={product.variant}
                            onChange={handleChange}
                            className="input input-bordered w-full border-emerald-400"
                        >
                            <option value="">Select your variant</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="extraLarge">XL</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start space-y-2 w-48">
                        <label className="font-semibold">Selling Date</label>
                        <input
                            type="date"
                            name="sellingDate"
                            value={product.sellingDate}
                            onChange={handleChange}
                            placeholder="Product Url"
                            className="input input-bordered w-full max-w-xs required:border-red-500 border-emerald-400"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-2 mt-4">
                    <input
                        type="checkbox"
                        className="default:ring-2 ..."
                        onChange={handleCheckbox}
                    />
                    <label className="font-semibold">Include Tax</label>
                </div>

                {showTaxTinFields && (
                    <div className="flex space-x-4 mt-6">
                        <div className="flex flex-col items-start space-y-2">
                            <label className="font-semibold">TIN Number</label>
                            <input
                                type="text"
                                name="tinNumber"
                                value={product.tinNumber}
                                onChange={handleChange}
                                placeholder="TIN number"
                                className="input input-bordered w-full max-w-xs border-emerald-400"
                            />
                        </div>
                        <div className="flex flex-col items-start space-y-2">
                            <label className="font-semibold">Tax Amount</label>
                            <input
                                type="text"
                                name="taxAmount"
                                value={product.taxAmount}
                                onChange={handleChange}
                                placeholder="Tax amount"
                                className="input input-bordered w-full max-w-xs border-emerald-400"
                            />
                        </div>
                    </div>
                )}

                <div className="flex space-x-4 mt-4">
                    <div className="flex flex-col items-start space-y-2">
                        <label className="font-semibold">Total Amount</label>
                        <input
                            type="text"
                            name="totalAmount"
                            value={product.totalAmount}
                            onChange={handleChange}
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs border-emerald-400"
                        />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                        <label className="font-semibold">Grand Total</label>
                        <input
                            type="text"
                            name="grandTotal"
                            value={product.grandTotal}
                            onChange={handleChange}
                            placeholder="grand total"
                            className="input input-bordered w-full max-w-xs required:border-red-500 border-emerald-400"
                        />
                    </div>
                </div>

                <div className='mt-8'>
                    <button type="submit" onClick={handleSubmit} className="btn btn-outline border-emerald-400">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default Form;
