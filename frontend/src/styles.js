import styled from "styled-components";

export const AboutStyle = styled.div`
  min-height: 98vh;
  padding: 5rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DescriptionStyle = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
    color: #5C7AEA;
  }
`

export const ImageStyle = styled.div`
  z-index: 2;
  flex: 1;

  overflow: hidden;
  img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }
`