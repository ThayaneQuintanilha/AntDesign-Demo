import { Modal, Button } from "antd";
import React from "react";

type ProductModalProps = {
  visible: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    description: string;
    price: string;
  };
};

const ProductModal: React.FC<ProductModalProps> = ({ visible, onClose, product }) => {
  return (
    <div className="card-modal-product">
      <Modal
        visible={visible}
        title={product.name}
        onCancel={onClose}
        footer={[
          <Button key="close" onClick={onClose}>
            Fechar
          </Button>,
        ]}
        >
        <img src={product.image} alt={product.name} style={{ maxWidth: "100%" }} />
        <p>{product.description}</p>
        <p>{product.price}</p>
      </Modal>
    </div>
  );
};

export default ProductModal;
