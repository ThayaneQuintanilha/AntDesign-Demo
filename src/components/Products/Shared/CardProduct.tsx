import React, { useState } from "react";
import { Avatar, Button, Card, Space } from "antd";
import MockProducts from '../../Mocks/MockProducts';
import ModalProduct from "../../Modal/ModalProducts/ModalProduct";
import '../../../styles/product.css';

const { Meta } = Card;

const CardProduct: React.FC = () => {
  // const [imgSelected, setImgSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleClickImage = (product: any) => {
    setSelectedProduct(product);
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div className="card-product-container">
      {MockProducts.map((product: any) => (
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
              <Button style={{ width: 120 }} type="primary">Carrinho</Button>
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
