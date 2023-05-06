import React from 'react';
import styled, { css } from 'styled-components';

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlinkHref="http://www.w3.org/1999/xlink"
        viewBox="0 0 90 90"
      >
        <defs>
          <linearGradient
            id="prefix__a"
            x1="44.57"
            y1="89.14"
            x2="44.57"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset=".16" stopColor="#fdfdfd" />
            <stop offset=".24" stopColor="#f5f5f5" />
            <stop offset=".29" stopColor="#e9e9e9" />
            <stop offset=".34" stopColor="#d6d6d6" />
            <stop offset=".38" stopColor="#bfbfbf" />
            <stop offset=".42" stopColor="#a2a2a2" />
            <stop offset=".45" stopColor="#7f7f7f" />
            <stop offset=".49" stopColor="#575757" />
            <stop offset=".52" stopColor="#2a2a2a" />
            <stop offset=".54" />
          </linearGradient>
          <linearGradient
            id="prefix__b"
            x1="44.57"
            y1="12.16"
            x2="44.57"
            y2="76.99"
            xlinkHref="#prefix__a"
          />
        </defs>
        <circle cx="44.57" cy="44.57" r="44.57" fill="url(#prefix__a)" />
        <circle cx="44.57" cy="44.57" r="32.42" fill="url(#prefix__b)" />
        <circle cx="44.57" cy="44.57" r="19.65" fill="#fff" />
      </svg>
    </Icon>
  );
};

const Icon = styled.div`
  display: block;
  width: auto;
  height: 2em;
  max-width: 100%;
  margin: -0.75rem auto;
  color: white;

  ${(props) =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;
      width: 90px;
      height: 90px;
      color: black;
    `}

  svg {
    display: block;
    margin: 0 auto;
    height: 100% !important;
    width: auto;
    fill: currentColor;
  }
`;

export default Logo;
