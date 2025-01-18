import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Product routes */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />

        {/* Single product route */}
        <Route path="/product/:id" element={<Product />} />

        {/* Cart route */}
        <Route path="/cart" element={<Cart />} />

        {/* Conditional login route */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {/* Conditional register route */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
