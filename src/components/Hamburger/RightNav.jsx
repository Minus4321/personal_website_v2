import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href="#skills">
        <li>Skills</li>
      </a>
      <a href="#projects">
        <li>Projects</li>
      </a>
      <a href="#contact">
        <li>Contact</li>
      </a>
      <li>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </li>
      {/* need to add href's */}
    </Ul>
  );
};

export default RightNav;

// Styled Components

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 65vw;
    padding-top: 7rem;
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ open }) =>
      open ? "-9px 0px 30px 3px rgba(0, 0, 0, 0.49)" : "none"};
    li {
      list-style: none;
      color: black;
      margin: 16px 0;
      padding: 20px 40px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 510;
      cursor: pointer;
      display: block;
    }
    li:hover {
      background: orange;
      color: white;
      /* transition: 0s; */
    }
    box-shadow::after {
      transition: box-shadow 0.3s ease-in-out 10s;
    }
  }
`;
