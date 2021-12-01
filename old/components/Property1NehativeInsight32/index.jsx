import React from "react";
import styled from "styled-components";


function Property1NehativeInsight32(props) {
  const { className } = props;

  return <Insights className={`insights-3 ${className || ""}`}></Insights>;
}

const Insights = styled.div`
  position: absolute;
  width: 102px;
  height: 32px;
  top: 676px;
  left: 501px;
  border-radius: 48px;

  &.insights-3.insights-4 {
    top: 549px;
    left: 448px;
  }

  &.insights-3.insights-5 {
    top: 0;
    left: 82px;
    border-radius: 30px;
  }

  &.insights-3.insights-6 {
    margin-top: 46px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

export default Property1NehativeInsight32;
