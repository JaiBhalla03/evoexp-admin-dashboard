import React from "react";

import styled from "styled-components";

const LeftAr = styled.div`
  font-size: 0;
  line-height: 0;
  top: 50%;
  margin: auto 10px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  color: transparent;
  
  border: none;
  outline: 0;
  background: 0 0;

  &::before {
    content: "<" !important;
    font-size: 2.5rem;
    text-shadow: 1px 1px 5px #000;
    line-height: 1;
    color: #fff;
    background: none;
    width: 32px;
    height: 32px;
    
  }
`;

const Arrow = (props) => {
    const { style, onClick } = props;
  return (
  <LeftAr onClick={onClick} />
  )
}

export default Arrow


