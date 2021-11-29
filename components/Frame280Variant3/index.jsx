import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px } from "../../styledMixins";


function Frame280Variant3(props) {
  const { className } = props;

  return (
    <Frame280Variant31 className={`frame-280-variant3 ${className || ""}`}>
      <Rectangle204 className="rectangle-204-4"></Rectangle204>
      <InAnalysis19 className="in-analysis-19">In Analysis 19</InAnalysis19>
    </Frame280Variant31>
  );
}

const Frame280Variant31 = styled.div`
  height: 26px;
  margin-top: 14px;
  margin-right: 7px;
  display: flex;
  align-items: center;
  min-width: 149px;

  &.frame-280-variant3.frame-280-variant3-1 {
    margin-right: 9px;
  }
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--gulf-blue);
`;

const InAnalysis19 = styled.div`
  ${PoppinsNormalCharade17px}
  width: 118px;
  min-height: 26px;
  margin-left: 11px;
  letter-spacing: 0;
`;

export default Frame280Variant3;
