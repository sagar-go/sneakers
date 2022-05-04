import React from "react";
import { useState } from "react";
import { MyContext } from "./Context";
import { useContext } from "react";
import logo from "../Images/logo.svg";
import img1 from "../Images/img1.jpg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import avatar from "../Images/avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css";
import "../Styles/Nav.css";
import { GrFormClose } from "react-icons/gr";

import { FiTrash } from "react-icons/fi";

const Nav = () => {
  const { show, setshow, setCounter, cart, setcart } = useContext(MyContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "32%",
    left: "81%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    boxShadow: 24,
    height: 250,
  };
  return (
    <>
      <nav>
        <div className="left">
          <GiHamburgerMenu
            className="ham"
            size={"25px"}
            color={"gray"}
            onClick={() => setshow(!show)}
          />
          <img src={logo} alt="" />

          <ul className={show ? " shownav" : "hidenav"}>
            <GrFormClose
              size={"30px"}
              className="cancel"
              onClick={() => setshow(!show)}
            />
            <li>Collections </li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="right" onClick={() => setshow(false)}>
          <AiOutlineShoppingCart
            className="logo"
            size={"30px"}
            color={"gray"}
            cursor={"pointer"}
            onClick={() => handleOpen()}
          />
          {cart.length ? <span>{cart.length} </span> : ""}
          <img src={avatar} alt="" />
        </div>
        <Modal keepMounted open={open} onClose={handleClose}>
          <Box sx={style}>
            {cart.length > 0 ? (
              <div className="cart">
                <h4>Cart</h4>
                <div className="mid">
                  <img src={img1} alt="" />
                  <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <span>$125.00 x {cart.length}</span>{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "black",
                        paddingTop: "5%",
                      }}
                    >
                      ${125.0 * cart.length}
                    </span>
                  </div>
                  <FiTrash
                    size={"20px"}
                    color={"gray"}
                    cursor={"pointer"}
                    onClick={() => {
                      setcart([]);
                      setCounter(0);
                    }}
                  />
                </div>
                <button>Checkout</button>
              </div>
            ) : (
              <div className="cart">
                <h4>Cart</h4>
                <div className="mid">
                  <p style={{ paddingTop: "10%", fontWeight: "600" }}>
                    Your cart is empty
                  </p>
                </div>
              </div>
            )}
          </Box>
        </Modal>
      </nav>
    </>
  );
};

export default Nav;
