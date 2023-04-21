import React, { useState } from "react";
import { Avatar, Button, Card, Space, Badge } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import MockProducts from '../../Mocks/MockProducts';
import ModalProduct from "../../Modal/ModalProducts/ModalProduct";
import { Product } from "../../Mocks/MockProducts";
import '../../../styles/product.css';

const { Meta } = Card;

const CardProduct: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cardObject, setCardObject] = useState<{[key: string]: number}>({});

  const handleClickImage = (product: any) => {
    setSelectedProduct(product);
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const handleAddToCard = (product: Product) => {
    setCardObject((prevCardObject) => {
      const newCardObject = {...prevCardObject};
      if (product.id in newCardObject) {
        newCardObject[product.id] += 1;
      } else {
        newCardObject[product.id] = 1;
      }
      return newCardObject;
    });
  }

  const quantityInCard = (productId: number) => {
    return cardObject[productId] || 0;
  }

  return (
    <div className="card-product-container">
      {MockProducts.map((product: Product) => (
        <Card
          key={product.id}
          style={{ width: 300, marginBottom: "20px" }}
          cover={
            <img onClick={ () => handleClickImage(product) } alt={ product.name } src={ product.image } />
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
          <div className="card-product-buttons">
            <Space wrap>
            <Badge count={quantityInCard(product.id)}>
              <Button
                onClick={() => handleAddToCard(product)}
                style={{ width: 120 }}
                type="primary"
                icon={<ShoppingCartOutlined />}
              >
                Carrinho ({quantityInCard(product.id)})
              </Button>
            </Badge>
              <Button style={{ width: 120 }} type="primary" danger>Comprar Agora</Button>
            </Space>
          </div>
      </div>
        </Card>
      ))}
      {selectedProduct && (
        <ModalProduct
          visible={modalVisible}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default CardProduct;
