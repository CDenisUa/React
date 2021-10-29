import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  height: 100%;
  padding: 10px;
  position: relative;
  
  img:last-child {
    display: none;
    position: absolute;
    right: 5px;
    bottom: 5px;
    z-index: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
    margin: 100px auto;

  }

  @media screen and (min-width: 1024px) {
    padding: 50px 166px;
  }

  @media screen and (min-width: 1280px) {
    min-height: 1500px;
    img:last-child {
      display: inline;
    }
  }
`;

export const Button = styled.button`
  padding: 11px 18px;
  width: 100%;
  max-width: ${({maxWidth = '101px'}) => maxWidth};
  min-width: ${({width = '101px'}) => width};
  min-height: 38px;
  background: ${({bgcolor = '#9F0013'}) => bgcolor};
  margin: ${({margin = '0'}) => margin};
  position: relative;
  border: none;
  transition:all .3s;
  color: #fff;
  text-transform: uppercase;
  font-family: 'DecalotypeLight',serif;
  &:hover {
    background-color: #5C5C5C;
    transform: translateY(-5px);
    cursor: pointer;
  }
  
  &:after,
  &:before
  {
    content: '';
    width: 0;
    height: 0;
    position: absolute;

  }
  
  &:after{
    border-top: 10px solid #fff;
    border-right: 10px solid transparent;
    top: -1px;
    left: -1px;
  }
  
  &:before {
    border-bottom: 10px solid #fff;
    border-left: 10px solid transparent;
    bottom: -1px;
    right: -1px;
  }
`;

export const Title = styled.h2`
  font-family: 'DecalotypeBlack', serif;
  font-size: 22px;
`;

export const SubTitle = styled.span`
  font-family: 'DecalotypeBlack', serif;
  font-size: 18px;
  text-transform: uppercase;
  color: ${({color}) => color};
  margin: ${({margin}) => margin}
`;

export const Article = styled.article`
  font-family: 'Decalotype', serif;
  font-size: 14px;
  text-align: left;
`

export const Text = styled(Article)``;

export const Price = styled.span`
  font-family: 'DecalotypeSemiBold', sans-serif;
  color: ${({color = '#9F0013'}) => color};
  font-size: ${({size = '24px'}) => size};
`;

export const GlobalStyle = createGlobalStyle`
  
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }


  button,
  input {
    /* 1 */
    overflow: visible;
  }

  button,
  select {
    /* 1 */
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

`