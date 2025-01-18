import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material"; // Correct import for Search icon
import { ShoppingCartOutlined } from "@mui/icons-material"; // Correct import for ShoppingCart icon
import { Badge, MenuItem } from "@mui/material"; // Correct imports for Badge and MenuItem
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;

  @media (max-width: 380px) {
    height: 50px; /* Adjust height for mobile */
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 380px) {
    padding: 10px 0px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  @media (max-width: 380px) {
    width: 30px;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 380px) {
    display: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  @media (max-width: 380px) {
    font-size: 24px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 380px) {
    justify-content: center;
  }
`;

const MenuItemStyled = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 380px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  console.log(quantity); // Check quantity of items in the cart

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Uniton.</Logo>
        </Center>
        <Right>
          <MenuItemStyled>REGISTER</MenuItemStyled>
          <MenuItemStyled>SIGN IN</MenuItemStyled>
          <Link to="/cart">
            <MenuItemStyled>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItemStyled>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
