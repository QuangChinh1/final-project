import React from "react";
import "./Header2.css";
import { Input } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header2 = () => {
    const { Search } = Input;
    return (
        <div className="Header2">
            <div className="Header2-1">
                <div className="Header2-1-1">
                    <div className="Header2-1-1-1">Quản lý sản phẩm</div>
                    <div className="Header2-1-1-1">Tải ứng dụng</div>
                </div>
                <div className="Header2-1-2">
                    <div className="Header2-1-1-1">Thông báo</div>
                    <div className="Header2-1-1-1">Hỗ trợ</div>
                    <div className="Header2-1-1-1">Tiếng việt</div>
                    <div className="Header2-1-1-1">Đăng kí</div>
                    <div className="Header2-1-1-1">Đăng nhập</div>
                </div>
            </div>
            <div className="Header2-2">
                <div>
                    <img
                        className="Header2-image"
                        src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo-2.png"
                    />
                </div>
                <Search
                    className="Header2-input"
                    placeholder="input search text"
                    // onSearch={}
                    enterButton
                />
                <AiOutlineShoppingCart className="Header2-2-1" />
            </div>
        </div>
    );
};

export default Header2;
