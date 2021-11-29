import React from "react";
import styled from "styled-components";
import { PoppinsNormalSasquatchSocks17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight(props) {
  const { children, className } = props;

  return (
    <Insights className={`insights-2 ${className || ""}`}>
      <Attention className="attention-5">{children}</Attention>
    </Insights>
  );
}

const Insights = styled.div`
  height: 32px;
  display: flex;
  padding: 2.5px 30.5px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 29px;

  &.insights-2.insights-4 {
    border-radius: 16px;
  }

  &.insights-2.insights-5 {
    border-radius: 41px;
  }

  &.insights-2.insights-6 {
    border-radius: 16px;
  }

  &.insights-2.insights-7 {
    border-radius: 41px;
  }
`;

const Attention = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalSasquatchSocks17px}
            height: 26px;
  min-width: 39px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight;
