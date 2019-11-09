import React, { useState } from "react";
import logo from "./logo.svg";
import styled from "styled-components";

interface CustomAttributes {
  isActive: boolean;
}

export const Button = styled.div`
${(p: CustomAttributes) => p.isActive && "color:  #37C870 ;"}
  background-color: ${(props: any) => (props.isActive ? "green" : "blue")};
  padding: 2rem;
  cursor: pointer;
  color: white;
`;

const App: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Button isActive={isActive} onClick={() => setIsActive(!isActive)}>
      Click me!
    </Button>
  );
};

export default App;
