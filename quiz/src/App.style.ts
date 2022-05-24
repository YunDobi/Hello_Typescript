import styled, {createGlobalStyle} from "styled-components";
//@ts-ignore
import background from './images/sauri3.jpeg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }

  body {
    background-image: url(${background});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
aligin-items: center;

> p {
  color: #fff;
}

.score {
  color: #fff;
  font-size: 2rem;
  margin: 0;
}

.next, .start {
  background: linear-gradient(180deg, #fff, #ffcc91);
  margin: 20px 0;
  padding: 0 40px;
  cursor: pointer;
  height: 40px;
  border: 2px solid;
  border-radius: 10px;
}
`
