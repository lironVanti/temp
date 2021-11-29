import React from "react";
import styled from "styled-components";
import { PoppinsNormalPeriwinkle17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight322() {
  return (
    <Insights>
      <Attention>Draft</Attention>
    </Insights>
  );
}

const Insights = styled.div`
  height: 32px;
  margin-top: -1px;
  display: flex;
  padding: 2.5px 29px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 48px;
`;

const Attention = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalPeriwinkle17px}
            height: 26px;
  min-width: 42px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight322;
