import React from "react";
import { Avatar, Button, Card, Space } from "antd";
import MockProducts from '../../Mocks/MockProducts';
import '../../../styles/product.css';

const { Meta } = Card;

const CardProduct: React.FC = () => {
  return (
    <div className="card-product-container">
      {MockProducts.map((product) => (
        <Card
          key={product.id}
          style={{ width: 300, marginBottom: "20px" }}
          cover={
            <img alt={ product.name } src={ product.image } />
          }
        >
          <div className="card-product-avatar">
            <div className="card-product-meta">
              <Meta
                avatar={
                  <Avatar src={ product.image } />
                }
                title={ product.name }
                description={ product.price }
                />
              <Meta
                description={ product.description }
                />
            </div>
          <div>
            <Space wrap className="card-product-buttons">
              <Button style={{ width: 120 }} type="primary">Carrinho</Button>
              <Button style={{ width: 120 }} type="primary" danger>Comprar Agora</Button>
            </Space>
          </div>
      </div>
        </Card>
      ))}
    </div>
  );
};

export default CardProduct;
