import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-height: 50vh;
  margin-bottom: 4em;

  .bg-img {
    opacity: .3;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 50vh;
    filter: blur(1.8px);
    /* Ensures that the bg-img covers the bg-container */
    object-fit: cover; 
    @media (max-width: 700px) {
      max-height: 100vh;
    }
  }

  .overlay {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8em 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media (max-width: 700px) {
      padding: 0;
      justify-content: center;
    }

    img {
      position: relative;
      z-index: 1;
      max-width: 100px;
      max-height: 100px;
      @media (max-width: 700px) {
        display: none;
      }
    }

    h1 {
      font-size: 7em;
      text-align: left;
      position: relative;
      z-index: 2;
      color: #FFDCA6;
      font-weight: 900;
      @media (max-width: 700px) {
        font-size: 3.5em;
        text-align: center;
      }
    }
  }
`