import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// pages
import ProductList from "./view/product-list/ProductList"
import ProductInfo from "./view/product-page/ProductInfo"

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<ProductList/>}/>
                    <Route path="/product/:id" element={<ProductInfo/>}/>
                </Routes>
        </Router>
    );
}

export default App;
