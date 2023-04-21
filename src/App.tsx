import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Login/LoginPage";
import Products from "./components/Products/Shared/CardProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
