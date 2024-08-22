import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const url = "http://localhost:5000/products";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
