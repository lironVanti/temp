import React from "react";
import styled from "styled-components";
import { PoppinsNormalBilobaFlower17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight2() {
  return (
    <Insights>
      <Attention>Ready</Attention>
    </Insights>
  );
}

const Insights = styled.div`
  height: 32px;
  margin-top: -1px;
  display: flex;
  padding: 2.5px 23px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 30px;
`;

const Attention = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalBilobaFlower17px}
            height: 26px;
  min-width: 54px;
  text-align: center;
  letter-spacing: 0;
`;

const Insights1 = styled.div`
  height: 32px;
  margin-top: -1px;
  display: flex;
  padding: 2.5px 23px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 30px;
`;

const Attention1 = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalBilobaFlower17px}
            height: 26px;
  min-width: 54px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight2;
