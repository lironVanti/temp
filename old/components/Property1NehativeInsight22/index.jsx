import React from "react";
import styled from "styled-components";
import { PoppinsNormalBilobaFlower17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight22(props) {
  const { className } = props;

  return (
    <Insights className={`insights-11 ${className || ""}`}>
      <Attention className="attention-2">Ready</Attention>
    </Insights>
  );
}

const Insights = styled.div`
  position: absolute;
  height: 32px;
  top: 225px;
  left: 454px;
  display: flex;
  padding: 2.5px 23px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 30px;

  &.insights-11.insights-12 {
    top: 146px;
  }

  &.insights-11.insights-13 {
    margin-top: -1px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const Attention = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalBilobaFlower17px}
            height: 26px;
  min-width: 54px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight22;
