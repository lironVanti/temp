import React from "react";
import styled from "styled-components";
import { PoppinsNormalCharade17px } from "../../styledMixins";


function Frame280Variant6(props) {
  const { className } = props;

  return (
    <Frame280Variant61 className={`frame-280-variant6-1 ${className || ""}`}>
      <Rectangle204 className="rectangle-204-4"></Rectangle204>
      <Error4 className="error-4">Error 4</Error4>
    </Frame280Variant61>
  );
}

const Frame280Variant61 = styled.div`
  height: 23px;
  align-self: flex-start;
  margin-top: 21px;
  margin-left: 34px;
  display: flex;
  align-items: center;
  min-width: 85px;

  &.frame-280-variant6-1.frame-280-variant6-2 {
    margin-top: 20px;
    margin-left: 34px;
  }
`;

const Rectangle204 = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--sasquatch-socks);
`;

const Error4 = styled.div`
  ${PoppinsNormalCharade17px}
  width: 54px;
  min-height: 23px;
  margin-left: 11px;
  letter-spacing: 0;
`;

export default Frame280Variant6;
