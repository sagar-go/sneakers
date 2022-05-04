import React from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import { BsCartDash } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "../App.css";
import "../Styles/Home.css";
import { useState } from "react";
import Nav from "./Nav";
import { useContext } from "react";
import { MyContext } from "./Context";

const Home = () => {
  const arr = [img1, img2, img3, img4];
  const [page, setpage] = useState(1);
  const obj = { src: img1, price: 125.0, qty: 1 };
  const [image, setimage] = useState(arr[0]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { show, setshow, counter, setCounter, cart, setcart } =
    useContext(MyContext);
  const add_to_cart = () => {
    setcart(Array(counter).fill(obj));
  };
  console.log("i m cart,", cart);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    boxShadow: 24,
    height: 562,
  };

  const change_image = () => {
    if (page < 4) {
      setimage(arr[page]);
      setpage(page + 1);
    } else {
      setpage(0);
    }
  };

  return (
    <>
      <Nav />
      <div className="Home" onClick={() => setshow(false)}>
        <div className="main">
          <img
            src={image}
            alt=""
            onClick={() => {
              handleOpen();
            }}
          />
          <IoIosArrowBack className="next" onClick={change_image} />
          <IoIosArrowForward className="next2" onClick={change_image} />

          <div className="box">
            {arr.map((e) => (
              <img
                className={image === e ? "clicked" : ""}
                src={e}
                alt=""
                onClick={() => setimage(e)}
              />
            ))}
          </div>
        </div>

        <div className="right">
          <span
            style={{
              color: "#ec3f1c",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            SNEAKER COMPANY
          </span>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.{" "}
          </p>
          <div className="span1">
            <span>$125.00</span>
            <p>50%</p> <span className="span22">$250.00</span>
          </div>
          <span className="span2">$250.00</span>

          <div className="span3">
            {counter < 1 ? (
              <button onClick={() => setCounter(counter - 1)} disabled>
                -
              </button>
            ) : (
              <button onClick={() => setCounter(counter - 1)}>-</button>
            )}
            <span
              style={{
                color: "black",
                cursor: "default",
              }}
            >
              {counter}
            </span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button className="button" onClick={add_to_cart}>
              <BsCartDash size={"25px"} color={"white"} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
          className="modal"
        >
          <div className="modal">
            <Box sx={style}>
              <div className="main">
                <img src={image} alt="" />
                <IoIosArrowForward className="next" onClick={change_image} />
                <GrFormClose
                  className="next2"
                  color={"white"}
                  onClick={() => handleClose()}
                />
                <div className="box">
                  {arr.map((e) => (
                    <img
                      className={image === e ? "clicked" : ""}
                      src={e}
                      alt=""
                      onClick={() => setimage(e)}
                    />
                  ))}
                </div>
              </div>
            </Box>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Home;
