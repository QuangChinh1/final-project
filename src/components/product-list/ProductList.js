import React, { useRef } from "react";
import { Button, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
    getProducts,
    setFilters,
} from "../../redux-toolkit/slices/productSlice";
import { createOrder } from "../../redux-toolkit/slices/orderSlice";

import "./ProductList.css";
import ProductItem1 from "../product-item/product-item-1/ProductItem1";

const ProductCard = ({ data }) => {
    const dispatch = useDispatch();

    const inputRef = useRef(null);

    const handleAddToCart = () => {
        const payload = {
            ...data,
            amount: inputRef.current.value,
        };

        console.log({ payload });
        dispatch(createOrder(payload));
    };

    return (
        <div
            className="ProductCard"
            key={data.id}
            style={{ border: "1px solid #000", textAlign: "center" }}
        >
            <img height={150} src={data.image} />
            <p>{data.productName}</p>
            <p>{data.productType}</p>
            <p>{data.price}</p>
            <p>{data.productStatus}</p>
            <input placeholder="number of items" ref={inputRef} />
            <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
    );
};

const ProductList = ({ data }) => {
    const dispatch = useDispatch();
    const { filters } = useSelector((state) => state.product);

    const handlePagination = (pageIndex) => {
        // dispatch(setFilters({
        //   current: pageIndex
        // }))

        const updatedFilters = {
            ...filters,
            current: pageIndex,
        };

        dispatch(getProducts(updatedFilters));
    };

    return (
        <div>
            <div className="ProductList">
                {data.map((item) => {
                    return <ProductItem1 data={item} />;
                })}
            </div>
            {data.length > 0 && (
                <Pagination
                    current={filters.current}
                    onChange={handlePagination}
                    total={50}
                />
            )}
        </div>
    );
};

export default ProductList;
