import { useState } from "react";
import { Button, Form, Input, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";


function UserLogin() {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if(user) {
      navigate("/products", { state: { name: user } })
    }
  }

  return (
    <main className="login">
      <Form layout="vertical">
        <Form.Item
          name="user"
          label="Usuário"
          rules={[
            { required: true, message: "Por favor, insira seu e-mail!" },
            { min: 3, message: "O nome deve ter no mínimo 3 caracteres!" }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            value={ user }
            placeholder="Escreva seu nome"
            onChange={({ target }) => setUser(target.value)}
          />
        </Form.Item>
        <Row justify="start">
          <Button type="primary" htmlType="button" onClick={ handleSubmit }>
            Entrar
          </Button>
        </Row>
      </Form>
    </main>
  );
}

export default UserLogin;
