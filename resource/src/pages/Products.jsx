import { Col, ListGroup, Row } from "react-bootstrap";
import { useContext } from "react";
import SingleCard from "../components/SingleCard";
import { ProductContext } from "../context/ProductProvider";

const Products = () => {
  const [product] = useContext(ProductContext);

  return (
    <div className="container">
      <Row md={12} className="py-5">
        <Col sm={2} md={2}>
          <ListGroup>
            <ListGroup.Item>Smartphones</ListGroup.Item>
            <ListGroup.Item>Laptops</ListGroup.Item>
            <ListGroup.Item>Fragrances</ListGroup.Item>
            <ListGroup.Item>Skincare</ListGroup.Item>
            <ListGroup.Item>Groceries</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={10} md={10}>
          <Row className="g-1">
            {product.length === 0 ? (
              <h1>Loading...</h1>
            ) : (
              product.map((item) => (
                <SingleCard
                  key={item.id}
                  photo={item.images[0]}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                  alldata={item}
                />
              ))
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
