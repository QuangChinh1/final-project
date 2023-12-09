import { Button, InputNumber } from "antd";
import "./ProductItem1.css";
import { useEffect } from "react";

function ProductItem1({ data }) {
    useEffect(() => {
        console.log(data);
    }, []);
    const onChange = (value) => {
        console.log("changed", value);
    };
    return (
        <div className="ProductItem1-1">
            <img className="ProductItem1-ProductImg" src={data.image} />
            <h5>{data.productName} </h5>
            <div>
                <div>Giá: {data.price}</div>
                <div>Tình trạng:{data.productStatus}</div>
                <div>Đơn vị vận chuyển: {data.shippingUnit}</div>
                <div>Danh mục: {data.productType}</div>
                <div>
                    <InputNumber
                        min={1}
                        max={999999}
                        onChange={onChange}
                        className="ProductItem1-2"
                    />
                    <Button type="primary">Áp dụng </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem1;
