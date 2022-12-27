import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import { motion } from "framer-motion";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        initial={{
          x: 500,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.7,
        }}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;

// Styled Components

const StyledBurger = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  top: 20px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 24px;
    margin-right: 14px;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "red" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.15s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "scale(0)" : "scale(1)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: all 0.15s;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

// Awesome!!! you really help me!! I was searching how to create a toggle menu and this is great!!

// I learned to close the menu when some link is clicked, if this can help anybody:
// 1. At burger.js, on the burger function, pass the "setOpen" function to the component "RightNav":
// <RightNav open={open} setOpen={setOpen} />

// 2. At RightNav.js, on the RightNav function, receive the function and take it out from props (change the function to receive props):
// const RightNav = (props) => {
//   const { open, setOpen } = props;
// ...

// 3. Use the received function on the links to change the state of "open":
// return (
//     <Ul open={open}>
//       <li>
//         <Link to='/' onClick={() => setOpen(!open)}>
//           Home
//         </Link>
// ...

// That's all, it should close the menu when a link is clicked.
