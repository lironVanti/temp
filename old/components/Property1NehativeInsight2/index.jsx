import React from "react";
import styled from "styled-components";
import { PoppinsNormalOxfordBlue17px, ValignTextMiddle } from "../../styledMixins";


function Property1NehativeInsight2(props) {
  const { className } = props;

  return (
    <Insights className={`insights-7 ${className || ""}`}>
      <Attention className="attention">Draft</Attention>
    </Insights>
  );
}

const Insights = styled.div`
  position: absolute;
  height: 32px;
  top: 759px;
  left: 831px;
  display: flex;
  padding: 2.5px 29px;
  align-items: flex-start;
  min-width: 102px;
  border-radius: 48px;

  &.insights-7.insights-8 {
    top: 838px;
  }

  &.insights-7.insights-9 {
    top: 927px;
  }
`;

const Attention = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalOxfordBlue17px}
            height: 26px;
  min-width: 42px;
  text-align: center;
  letter-spacing: 0;
`;

export default Property1NehativeInsight2;
