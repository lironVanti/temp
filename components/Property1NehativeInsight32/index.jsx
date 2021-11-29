import React from "react";
import styled from "styled-components";


function Property1NehativeInsight32(props) {
  const { className } = props;

  return <Insights className={`insights-9 ${className || ""}`}></Insights>;
}

const Insights = styled.div`
  position: absolute;
  width: 102px;
  height: 32px;
  top: 0;
  left: 82px;
  border-radius: 30px;

  &.insights-9.insights-10 {
    margin-top: 46px;
    border-radius: 48px;
    position: unset;
    top: unset;
    left: unset;
  }

  &.insights-9.insights-11 {
    margin-top: 46px;
    border-radius: 48px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

export default Property1NehativeInsight32;
