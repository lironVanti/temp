import React from "react";
import styled from "styled-components";


function StateActive() {
  return (
    <Toggle>
      <Ellipse74></Ellipse74>
    </Toggle>
  );
}

const Toggle = styled.div`
  height: 24px;
  margin-right: 2px;
  display: flex;
  padding: 0 4px;
  justify-content: flex-end;
  align-items: center;
  min-width: 48px;
  background-color: var(--caribbean-green-pearl);
  border-radius: 12px;
`;

const Ellipse74 = styled.div`
  width: 16px;
  height: 16px;
  background-color: var(--white);
  border-radius: 8px;
`;

export default StateActive;
