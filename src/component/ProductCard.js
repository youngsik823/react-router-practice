import React from "react";
import "../css/ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
    return (
        <div className="product-card" onClick={showDetail}>
            <img className="product-card-img" src={item?.img} />
            <div className="product-card-choice" >{item?.choice == true ? "Conscious choice" : ""}</div>
            <div className="product-card-title" >{item?.title}</div>
            <div className="product-card-price">\{item?.price}</div>
            <div className="product-card-new">{item?.new == true ? "신제품" : ""}</div>
        </div>
    );
};

export default ProductCard;
