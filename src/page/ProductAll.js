import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        const searchQuery = query.get("q") || "";
        const url = `https://my-json-server.typicode.com/youngsik823/react-router-practice/products?q=${searchQuery}`;
        try {
            const response = await fetch(url);
            const products = await response.json();
            const filter = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setProductList(filter);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, [query]);
    return (
        <div>
            <Container className="product-all">
                <Row className="product-all-row">
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
