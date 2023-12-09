// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
    getProductWithFiltersApi,
    createProductApi,
    deleteProductApi,
    updateProductApi,
} from "../../apis/productApi";

const initialFilters = {
    page: 1,
    size: 6,
    sortBy: "id",
    sortType: "DESC",
    productTypes: [],
    shippingUnits: [],
    productStatus: [],
    productName: "",
    maxPrice: "",
    minPrice: "",
};

// Redux Toolkit async thunk for fetching all products
export const getProducts = createAsyncThunk(
    "product/getProducts",
    async (data = initialFilters) => {
        console.log(data);
        const response = await getProductWithFiltersApi(data);
        return response;
    }
);

// Redux Toolkit async thunk for fetching a product by ID
export const createProduct = createAsyncThunk(
    "product/createProduct",
    async (data) => {
        const response = await createProductApi(data);
        return response;
    }
);

export const updateProduct = createAsyncThunk(
    "product/createProduct",
    async (data) => {
        const response = await updateProductApi(data);
        return response;
    }
);

export const deleteProduct = createAsyncThunk(
    "product/createProduct",
    async (data) => {
        const response = await deleteProductApi(data);
        return response;
    }
);

// Define the product slice
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        filters: initialFilters,
        status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
        error: null,
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Reducer for fetching all products
            .addCase(getProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setFilters } = productSlice.actions;
export default productSlice.reducer;
