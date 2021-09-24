import styled from "styled-components";

export const Content = styled.div`
  min-width: 6rem;
  align-items: center;
  position: relative;
  margin: 0.25rem 0.25rem;
`;

export const TagButton = styled.button`
  background-color: green;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  border-radius: 1rem;
  border: none;
  color: white;
  padding: 0.25rem 0.75rem;
  padding-right: 2rem;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 0.5rem;
  display: flex;
  color: white;
  cursor: pointer;
`;
