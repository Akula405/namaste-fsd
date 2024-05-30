import React from "react";
import { Heading } from "./stylingComponent";
import { CustomButton } from "./stylingComponent";

const StyleComponent = () => {
  const handleClick = () => {
    console.log("Stled component Button Clicked");
  };

  return (
    <div>
      <Heading>Welcome to Styled Components</Heading>
      <CustomButton signIn={false} onClick={handleClick}>
        SignUp
      </CustomButton>
      <CustomButton signIn={true}>SignIn</CustomButton>
    </div>
  );
};

export default StyleComponent;
