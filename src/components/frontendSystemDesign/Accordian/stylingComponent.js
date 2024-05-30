import styled from "styled-components";
export const Heading = styled.h1`
  color: red;
  font-size: 20px;
  text-align: center;
  margin: 20px;
`;
export const CustomButton = styled.button`
  color: ${(props) => (props.signIn ? "blue" : "red")};
  background-color: ${(props) => (props.signIn ? "white" : "yellow")};
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
`;
