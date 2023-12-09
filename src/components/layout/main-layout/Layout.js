import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../Header/Header";

import "./Layout.css";

export const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <footer>footer</footer>
            {/* <Outlet /> */}
        </div>
    );
};
