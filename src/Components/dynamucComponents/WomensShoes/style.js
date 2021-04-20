import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  width: 100%;
  overflow-wrap: break-word;
  position: relative;
  min-width: 0px;
  flex-direction: column;
  display: flex;
  border-width: 0px;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e4e4e7;
  --tw-bg-opacity: 1;
  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));
  margin: 0;
`;

export const Main = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-top: 0px;
  padding-bottom: 2.5rem;
  flex: 1 1 auto;
`;

export const H6 = styled.div`
  text-transform: uppercase;
  --tw-text-opacity: 1;
  color: rgba(148, 163, 184, var(--tw-text-opacity));
  margin-bottom: 1.5rem;
  margin-top: 0.75rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const Block = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Input = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 0.75rem;
`;

export const BlockSelect = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const BlockLabel = styled.div`
  text-transform: uppercase;
  --tw-text-opacity: 1;
  color: rgba(71, 85, 105, var(--tw-text-opacity));
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  display: block;
`;

// export const BlockField = styled.div`
// transition-duration: 150ms;
// transition-timing-function: linear;
// transition-property: all;
// width: 100%;
// --tw-text-opacity: 1;
// color: rgba(71, 85, 105, var(--tw-text-opacity));
// padding-left: 0.75rem;
// padding-right: 0.75rem;
// padding-top: 0.75rem;
// padding-bottom: 0.75rem;
// font-size: 0.875rem;
// line-height: 1.25rem;
// border-width: 0px;
// border-radius: 0.25rem;
// --tw-bg-opacity: 1;
// background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
// appearance: none;
// overflow: auto;
// font-family: inherit;
// resize: vertical;
// margin: 0;-webkit-appearance: none;
// `;

export const Button = styled.button`
  color: gray;
  padding-left: 5px;
  font-size: 18px;
  cursor: default;
  transition-duration: 150ms;
  transition-timing-function: linear;
  transition-property: all;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  margin-bottom: 0.25rem;
  line-height: 1.25rem;
  font-weight: 700;
  overflow: visible;
  font-family: inherit;
  margin: 0;
  background-color: transparent;
  background-image: none;
`;

export const Img = styled.img`
  width: 14px;
  height: 14px;
  margin-bottom: 2px;
  cursor: pointer;
  color: red;
  fill:red;
  stroke:blue
`;
