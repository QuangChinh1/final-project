import axiosInstance from "./axios";

// Simulated API call for fetching a product by ID
export const createOrderApi = async (newProduct) => {
    const response = await axiosInstance({
        method: "post",
        url: "/order/create",
        data: {
            accountId: 1,
            productId: 1,
            quantity: 2,
        },
    });
    return response.data;
    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
};

export const buyOrderApi = async (newProduct) => {
    const response = await axiosInstance({
        method: "post",
        url: `/order/buy-product/${16}`,
        // params: {
        //     orderId: "16",
        // },
    });

    return response.data;
    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
};

export const cancelBuyApi = async (newProduct) => {
    const response = await axiosInstance({
        method: "post",
        url: `/order/cancel-product/${11}`,
        // params: {
        //     orderId: "1",
        // },
    });

    return response.data;
    // Simulating an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // not return anythings
};

export const getOrderByStatusApi = async ({ accountId, orderStatus }) => {
    const response = await axiosInstance({
        method: "get",
        url: "/order/get-by-status",
        params: {
            accountId: accountId,
            orderStatus: orderStatus,
        },
    });

    return response.data;
};
