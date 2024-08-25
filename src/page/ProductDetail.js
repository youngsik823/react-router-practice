import React, { useEffect, useState } from "react";
import { Row, Col, Container, Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        const url = `https://my-json-server.typicode.com/youngsik823/react-router-practice/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container>
            <Row className="product-detail-row">
                <Col className="product-img">
                    <img className="detail-img" src={product?.img} />
                </Col>
                <Col>
                    <div className="product-detail-title">{product?.title}</div>
                    <div className="product-detail-price">
                        \{product?.price}
                    </div>
                    <div className="product-detail-choice">
                        {product?.choice == true ? "Conscious choice" : ""}
                    </div>
                    <div>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="사이즈 선택"
                            className="product-detail-down-button"
                        >
                            {product?.size.map((size) => (
                                <Dropdown.Item
                                    href={`#${size}`}
                                    className="product-detail-size-dropdown"
                                >
                                    {size}
                                </Dropdown.Item>
                            ))}
                        </DropdownButton>
                    </div>
                    <div className="product-detail-button">추가</div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
