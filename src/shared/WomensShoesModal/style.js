import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Main = styled.div`
  width: 100%;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  position: relative;
  outline: 2px solid transparent;
  outline-offset: 2px;
  flex-direction: column;
  display: flex;
  border-width: 0px;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
`;

export const Footer = styled.div`
  z-index: 40;
  position: fixed;
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
`;

export const WomensShoesContainer = styled.div`
  position: relative;
  flex: 1 1 auto;
`;
