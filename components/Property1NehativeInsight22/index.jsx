import React from "react";
import styled from "styled-components";
import { PoppinsNormalBilobaFlower17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight22(props) {
  const { className } = props;

  return (
    <Insights className={`insights ${className || ""}`}>
      <Attention className="attention">Ready</Attention>
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

  &.insights.insights-1 {
    top: 146px;
  }

  &.insights.insights-2 {
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
