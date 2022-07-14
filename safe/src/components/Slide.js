import React from 'react';
import styled from 'styled-components';,

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 100%;
  height: auto;
  flex:1;
  object-fit: cover;
`;