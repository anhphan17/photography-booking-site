import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Layout.css';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;