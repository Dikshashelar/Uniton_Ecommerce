import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Call the backend API
        const res = await axios.get("http://localhost:5000/api/products", {
          params: { category: cat }, // Pass category as a query parameter
        });
        console.log("API Response: ", res.data); // Log the response to the console
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      const filtered = products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key]?.includes(value)
        )
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts("/products"); // Show all products if no category is selected
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
