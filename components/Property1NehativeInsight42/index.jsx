import React from "react";
import styled from "styled-components";
import { PoppinsNormalGulfBlue17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight42() {
  return (
    <Insights>
      <Attention>In Analysis</Attention>
    </Insights>
  );
}

const Insights = styled.div`
  height: 32px;
  margin-top: -1px;
  display: flex;
  padding: 2.5px 5px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 42px;
`;

const Attention = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalGulfBlue17px}
            height: 26px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight42;
