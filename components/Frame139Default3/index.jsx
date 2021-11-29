import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px } from "../../styledMixins";


function Frame139Default3(props) {
  const { className } = props;

  return (
    <Frame139Default className={`frame-139-default-1 ${className || ""}`}>
      <Rectangle204 className="rectangle-204-3"></Rectangle204>
      <Live26 className="live-26-1">Live&nbsp;&nbsp;26</Live26>
    </Frame139Default>
  );
}

const Frame139Default = styled.div`
  height: 26px;
  margin-top: 20px;
  margin-right: 63px;
  display: flex;
  align-items: center;
  min-width: 93px;

  &.frame-139-default-1.frame-139-default-2 {
    margin-right: 65px;
  }
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--caribbean-green-pearl);
`;

const Live26 = styled.div`
  ${PoppinsNormalCharade17px}
  min-height: 26px;
  margin-left: 11px;
  min-width: 62px;
  letter-spacing: 0;
`;

export default Frame139Default3;
