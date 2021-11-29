import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px } from "../../styledMixins";


function Frame139Default(props) {
  const { className } = props;

  return (
    <Frame139Default1 className={`frame-139-default ${className || ""}`}>
      <Rectangle204 className="rectangle-204"></Rectangle204>
      <Live26 className="live-26">Live&nbsp;&nbsp;26</Live26>
    </Frame139Default1>
  );
}

const Frame139Default1 = styled.div`
  height: 26px;
  margin-top: 20px;
  margin-right: 63px;
  display: flex;
  align-items: center;
  min-width: 93px;

  &.frame-139-default.frame-139-default-1 {
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

export default Frame139Default;
