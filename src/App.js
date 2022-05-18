/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import SlickSlide from "./pages/SlickSlide";

function App() {
  return (
    <div className='App'>
      <section css={container}>
        <h1>React Slick 🐱</h1>
        <a href='https://react-slick.neostack.com/docs/example/simple-slider'>react-slick</a>
        <SlickSlide />
      </section>
    </div>
  );
}

const container = css`
  text-align: center;
`;

export default App;
